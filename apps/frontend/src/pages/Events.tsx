import { motion } from "motion/react";
import { Navigate, useParams } from "react-router";
import QRCode from "react-qr-code";


const extractYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

export default function Events() {
    interface Event {
        title: string;
        times: string[];
        location: string;
        description: string;
        fullAddress: string;
        difficulty: number;
        ages?: string;
        video: string;
    }
    const events: { [key: string]: Event } = {
        poolParty: {
            video: 'https://www.youtube.com/watch?v=wrNNtKjwVc4',
            title: "Pool Party Pump",
            times: ['Thursdays @ 11 am'],
            location: 'Boundary Waters Aquatic Center',
            description: "Dive into fitness with our Pool Party Pump! Join us every Thursday at 11 am for a refreshing aquatic workout that combines cardio, strength, and fun. Perfect for all fitness levels, this class will help you tone your muscles and boost your endurance while enjoying the water. Don't forget your swimsuit and towel!",
            fullAddress: "Boundary Waters Aquatic Center, 5000 highway 166,douglasville, GA",
            difficulty: 2,
            ages: "18+"
        },
            fitnessYoga: {
              video: 'https://www.youtube.com/watch?v=R1J8z56CLAw&t=31s',
                title: 'Breath Sweat Stretch',
                times: ['Tuesdays @ 9 am', 'Thursdays @ 9 am'],
                location: 'Boundary Fitness Center',
                description: "Experience the perfect blend of breath, sweat, and stretch with our Breath Sweat Stretch class! Join us every Tuesday and Thursday at 9 am for a dynamic workout that combines invigorating cardio, strength training, and deep stretching. This class is designed to boost your energy, improve flexibility, and leave you feeling refreshed. All fitness levels are welcome, so come ready to move and unwind!",
                fullAddress: "Boundary Fitness Center, 5000 highway 166, douglasville, GA",
                difficulty: 1,
                ages: "18+"
            }
    }
    const { event } = useParams();
    if (!event || !events[event]) {
        return <Navigate replace to="/" />;
    }
    const eventData = events[event];
    const videoId = eventData.video ? extractYouTubeId(eventData.video) : null;
  return (
    <main className="size-full min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto my-12">
        {videoId ? (
          <iframe
            className="w-full h-96 object-cover opacity-40 mb-8"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1`}
            title={eventData.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : null}
        <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">{eventData.title}</h1>
        <p className="text-lg leading-8 text-slate-300 mb-4">
          <strong>Times:</strong> {eventData.times.join(', ')}
        </p>
        <p className="text-lg leading-8 text-slate-300">
          <strong>Location:</strong> {eventData.location}
        </p>
        <p><strong>Difficulty:</strong> {new Array(eventData.difficulty).fill('★').join('')}</p>
        <p className="text-lg leading-8 text-slate-300">
          <strong>Description:</strong> {eventData.description}
        </p>
        <div className="mt-8 flex gap-4">
        <motion.a href="/" className="bg-triadic  text-white px-6 py-3 rounded-lg mt-8 inline-block font-semibold tracking-wide hover:bg-brand/90 transition-colors duration-300">
          Back 
        </motion.a>
        <motion.a href="https://secure.rec1.com/GA/douglas-county-parks-recreation/catalog/index/e411fca80fdee6f46fe950c8b1088819?filter=c2VhcmNoPSZsb2NhdGlvbiU1QjE3ODA3JTVEPTEmZGF5c09mVGhlV2VlayU1QjElNUQ9MSZkYXlzT2ZUaGVXZWVrJTVCMyU1RD0x" 
        className="bg-triadic hover:bg-brand active:bg-active active:text-black text-white px-6 py-3 rounded-lg mt-8 inline-block font-semibold tracking-wide hover:bg-brand/90 transition-colors duration-300">
          Register 
        </motion.a>
        </div>
        </div>
        </div>

        {/* <QRCode style={{ height: '150px' }} className="mx-auto  absolute bottom-8 right-8" value=" https://secure.rec1.com/GA/douglas-county-parks-recreation/catalog/index/e411fca80fdee6f46fe950c8b1088819?filter=c2VhcmNoPSZsb2NhdGlvbiU1QjE3ODA3JTVEPTEmZGF5c09mVGhlV2VlayU1QjElNUQ9MSZkYXlzT2ZUaGVXZWVrJTVCMyU1RD0x"/> */}

    </main>
  );
}
