import { Navigate, useParams, useSearchParams } from "react-router";

export default function Events() {
    interface Event {
        title: string;
        times: string[];
        location: string;
        description: string;
        fullAddress: string;
    }
    const events: { [key: string]: Event } = {
        poolParty: {
            title: "Pool Party Pump",
            times: ['Thursdays @ 11 am'],
            location: 'Boundary Waters Aquatic Center',
            description: "Dive into fitness with our Pool Party Pump! Join us every Thursday at 11 am for a refreshing aquatic workout that combines cardio, strength, and fun. Perfect for all fitness levels, this class will help you tone your muscles and boost your endurance while enjoying the water. Don't forget your swimsuit and towel!",
            fullAddress: "Boundary Waters Aquatic Center, 5000 highway 166,douglasville, GA"
,        },
            fitnessYoga: {
                title: 'Breath Sweat Stretch',
                times: ['Tuesdays @ 9 am', 'Thursdays @ 9 am'],
                location: 'Boundary Fitness Center',
                description: "Experience the perfect blend of breath, sweat, and stretch with our Breath Sweat Stretch class! Join us every Tuesday and Thursday at 9 am for a dynamic workout that combines invigorating cardio, strength training, and deep stretching. This class is designed to boost your energy, improve flexibility, and leave you feeling refreshed. All fitness levels are welcome, so come ready to move and unwind!",
                fullAddress: "Boundary Fitness Center, 5000 highway 166, douglasville, GA"
            }
    }
    const { event } = useParams();
    if (!event || !events[event]) {
        return <Navigate replace to="/" />;
    }
  return (
    <main className="size-full min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">Events</h1>
        <p className="text-lg leading-8 text-slate-300">
          Explore upcoming events and workshops. This page is under development, so check back soon for more details.
          {JSON.stringify(events[event])}
        </p>
      </div>
    </main>
  );
}
