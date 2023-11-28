import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { toast } from "react-toastify";

const CheckOutFrom = ({ info }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (info?.price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: info?.price })
        .then((data) => {
          //console.log(data.data.clientSecret);
          setClientSecret(data.data.clientSecret);
        });
    }
  }, [axiosSecure, info?.price]);

  const handleCheckOut = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "none",
            email: user?.email || "none",
          },
        },
      });
    if (confirmError) {
      // console.log("confirmError");
    } else {
      //console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const paymentInfo = {
          name: user?.displayName,
          email: user?.email,
          price:info?.price,
          bioDataId: info?.bioDataId,
          selfBioDataId: info?.selfBioDataID,
          status: "pending",
          find_name: info?.find_name,
          find_email: info?.find_email,
          find_phone: info?.find_phone,
        };
        const res = await axiosSecure.post("/payment", paymentInfo);
        if (res.data?.insertedId) {
          toast("Thanks for your payment", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleCheckOut}>
      <div className="lg:w-1/3 mx-auto flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label
                htmlFor="biodataId"
                value="Which biodata contact do you need"
              />
            </div>
            <TextInput
              id="biodataId"
              type="text"
              name="biodata"
              defaultValue={info?.bioDataId}
              readOnly
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="selfBiodataId" value="Your Biodata ID" />
            </div>
            <TextInput
              id="selfBiodataId"
              type="text"
              name="selfBiodataId"
              defaultValue={info?.selfBioDataID}
              readOnly
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="fee" value="Fee" />
          </div>
          <TextInput
            id="fee"
            type="text"
            name="fee"
            defaultValue={info?.price}
            readOnly
          />
        </div>

        <div className="lg:w-3/4">
          <div className="my-4 block">
            <Label htmlFor="cart" value="Stripe Card Number" />
          </div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  border: "1px solid red",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <Button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="lg:w-1/2 mx-auto my-6"
        >
          Submit
        </Button>
        <p className="text-red-600">{error}</p>
        {transactionId && (
          <p className="text-blue-500">
            Your transaction id is - <strong>{transactionId}</strong>
          </p>
        )}
      </div>
    </form>
  );
};
export default CheckOutFrom;
