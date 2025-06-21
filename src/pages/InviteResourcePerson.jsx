import React, { useState } from "react";

// Profile photo: You should replace this with a real photo URL or use a static asset.
const PROFILE_PHOTO = "https://randomuser.me/api/portraits/men/32.jpg"; // Placeholder

const PERSON_DETAILS = {
  name: "Mr. Alahakoon",
  bio: `
We deeply admire your extraordinary contributions to education and content creation in Sri Lanka. With a science degree and over a decade of lecturing at prestigious universities, your academic foundation is impressive.

Your ability to translate complex scientific and tech concepts into engaging video lessons is exceptional. Your expertise in AI integration, as shown by your workshops and masterclasses, highlights your forward-thinking approach.

Your guidance for aspiring entrepreneurs on business and monetization and your role as a public speaker training others in digital content and branding, solidify your position as a leading voice. Your active presence across various platforms further demonstrates your dedication to education.

Mr. Alahakoon, your multifaceted contributions make you an invaluable asset to our country. Your experiences and insights would be profoundly impactful for our audience.

Therefore, we would be honored if you would consider joining us for a podcasting program series. We believe your unique journey and perspectives would resonate profoundly with our listeners and provide immense value to our discussions.
  `,
  photo: PROFILE_PHOTO,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InviteResourcePerson() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Simulate "saving" by writing to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      // Save the slot as a JSON array in localStorage
      const current = JSON.parse(localStorage.getItem("invitedSlots") || "[]");
      current.push({ date, time, note, submittedAt: new Date() });
      localStorage.setItem("invitedSlots", JSON.stringify(current));
      setSubmitting(false);
      setSubmitted(true);
      setDate("");
      setTime("");
      setNote("");
      setTimeout(() => setSubmitted(false), 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center px-4 py-8 md:px-0 transition duration-500">
      {/* Card */}
      <div className="w-full max-w-2xl mx-auto bg-white/80 rounded-3xl shadow-2xl backdrop-blur-lg p-6 md:p-10 flex flex-col items-center animate-fade-in">
        {/* Profile */}
        <div className="flex flex-col items-center w-full mb-8">
          <div className="relative">
            <img
              src={PERSON_DETAILS.photo}
              alt={PERSON_DETAILS.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 shadow-xl object-cover transition-all duration-300 hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 bg-gradient-to-tr from-blue-400 to-purple-400 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">{PERSON_DETAILS.name}</h2>
        </div>

        {/* Bio */}
        <div className="w-full text-gray-700 leading-relaxed mb-8 whitespace-pre-line text-sm md:text-base animate-slide-up">
          {PERSON_DETAILS.bio}
        </div>

        {/* Invite Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 items-center animate-slide-up"
        >
          <div className="w-full flex flex-col md:flex-row gap-4">
            {/* Date Picker */}
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Select Date</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl px-4 py-2 border border-gray-300 bg-white focus:ring-2 focus:ring-blue-400 outline-none transition"
              />
            </div>

            {/* Time Picker */}
            <div className="flex-1 flex flex-col">
              <label className="mb-1 text-gray-700 font-medium">Select Time</label>
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-xl px-4 py-2 border border-gray-300 bg-white focus:ring-2 focus:ring-purple-400 outline-none transition"
              />
            </div>
          </div>

          {/* Note */}
          <div className="w-full">
            <label className="mb-1 text-gray-700 font-medium">Note (optional)</label>
            <textarea
              rows="3"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note or special request..."
              className="w-full rounded-xl px-4 py-2 border border-gray-300 bg-white focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting || !date || !time}
            className={classNames(
              "w-full md:w-1/2 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2",
              submitting || !date || !time
                ? "opacity-60 cursor-not-allowed"
                : "hover:scale-105 hover:shadow-2xl"
            )}
          >
            {submitting ? (
              <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              <span>Send Invitation</span>
            )}
          </button>
        </form>

        {/* Confirmation */}
        <div
          className={classNames(
            "mt-6 transition-all duration-500 w-full flex items-center justify-center",
            submitted ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          )}
        >
          <div className="bg-gradient-to-r from-green-400 to-teal-400 px-6 py-3 rounded-xl text-white font-semibold shadow-lg flex items-center gap-2 animate-bounce-in">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Invitation Sent!
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(.5,.5,0,1.02);
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(20px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-slide-up {
          animation: slide-up 1s .2s cubic-bezier(.5,.5,0,1.02) both;
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(.8);}
          60% { opacity: 1; transform: scale(1.05);}
          100% { opacity: 1; transform: scale(1);}
        }
        .animate-bounce-in {
          animation: bounce-in 0.7s .2s cubic-bezier(.33,1.75,.68,1) both;
        }
      `}</style>
    </div>
  );
}