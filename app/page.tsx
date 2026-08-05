import Starfield from "@/app/components/Starfield";
import Nav from "@/app/components/Nav";
import CoordinateHUD from "@/app/components/CoordinateHUD";
import ScrollTracker from "@/app/components/ScrollTracker";
import Hero from "@/app/components/Hero";
import AltitudeJourney from "@/app/components/AltitudeJourney";
import Equipment from "@/app/components/Equipment";
import Sessions from "@/app/components/Sessions";
import EventsAndLog from "@/app/components/EventsAndLog";
import BookingModal from "@/app/components/BookingModal";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Starfield />
      <ScrollTracker />
      <Nav />
      <CoordinateHUD />
      <main>
        <Hero />
        <AltitudeJourney />
        <Equipment />
        <Sessions />
        <EventsAndLog />
        <Footer />
      </main>
      <BookingModal />
    </>
  );
}
