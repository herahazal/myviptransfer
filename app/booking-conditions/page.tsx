import type { Metadata } from "next";
import BookingConditionsContent from "@/components/pages/BookingConditionsContent";

export const metadata: Metadata = {
  title: "Booking Conditions",
  description: "myviptransfer rezervasyon koşulları.",
};

export default function BookingConditionsPage() {
  return <BookingConditionsContent />;
}
