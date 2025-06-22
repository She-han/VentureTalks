import React, { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, Send, Check } from 'lucide-react';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import "react-datepicker/dist/react-datepicker.css";
import img from '../assets/malinda_pic.jpg'; // Replace with your actual image path

const Explore = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // EmailJS Configuration - Replace with your actual IDs
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_3uvjq4b',      // Replace with your Service ID
    TEMPLATE_ID: 'template_fuk77xu',    // Replace with your Template ID
    PUBLIC_KEY: 'h1tB227NuN2rpN6eM'      // Replace with your Public Key
  };

  // Generate available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const sendEmailNotification = async (formData) => {
    try {
      const templateParams = {
        guest_name: 'Mr. Alahakoon',
        selected_date: formData.date,
        selected_time: formData.time,
        note: formData.note || 'No additional notes provided',
        submission_time: new Date().toLocaleString('en-US', {
          timeZone: 'UTC',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' UTC',
        submitted_by: 'She-han' // Current user
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      return { success: true, response };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }

    setIsLoading(true);
    setSubmitError('');
    
    const formData = {
      date: selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      time: selectedTime,
      note: note
    };

    try {
      // Send email notification
      const emailResult = await sendEmailNotification(formData);
      
      if (emailResult.success) {
        // Save to localStorage as backup
        const submissions = JSON.parse(localStorage.getItem('podcastSubmissions') || '[]');
        submissions.push({
          date: selectedDate.toISOString().split('T')[0],
          time: selectedTime,
          note: note,
          timestamp: new Date().toISOString(),
          guestName: 'Mr. Alahakoon',
          submittedBy: 'She-han',
          emailSent: true
        });
        localStorage.setItem('podcastSubmissions', JSON.stringify(submissions));
        
        setIsSubmitted(true);
        console.log('Submission completed successfully');
      } else {
        throw new Error(emailResult.error);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitError('Failed to send invitation. Please try again.');
      
      // Save to localStorage even if email fails
      const submissions = JSON.parse(localStorage.getItem('podcastSubmissions') || '[]');
      submissions.push({
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        note: note,
        timestamp: new Date().toISOString(),
        guestName: 'Mr. Alahakoon',
        submittedBy: 'She-han',
        emailSent: false,
        error: error.message
      });
      localStorage.setItem('podcastSubmissions', JSON.stringify(submissions));
    } finally {
      setIsLoading(false);
    }
  };

  const formatDateForDisplay = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Custom styles for the date picker
  const datePickerCustomStyles = `
    .react-datepicker-wrapper {
      width: 100%;
    }
    
    .react-datepicker__input-container input {
      width: 100%;
      padding: 1rem;
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      font-size: 1rem;
      background-color: white;
      transition: all 0.3s ease;
    }
    
    .react-datepicker__input-container input:focus {
      outline: none;
      ring: 2px;
      ring-color: #a855f7;
      border-color: transparent;
    }
    
    .react-datepicker__input-container input:hover {
      background-color: #f9fafb;
    }
    
    .react-datepicker {
      font-family: inherit;
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .react-datepicker__header {
      background: linear-gradient(to right, #9333ea, #3b82f6);
      border-bottom: none;
      border-radius: 0.75rem 0.75rem 0 0;
      padding: 1rem 0;
    }
    
    .react-datepicker__current-month {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
    }
    
    .react-datepicker__navigation {
      top: 1rem;
    }
    
    .react-datepicker__navigation--previous {
      border-right-color: white;
    }
    
    .react-datepicker__navigation--next {
      border-left-color: white;
    }
    
    .react-datepicker__day-names {
      background-color: #f8fafc;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .react-datepicker__day-name {
      color: #6b7280;
      font-weight: 600;
      width: 2.5rem;
      line-height: 2.5rem;
    }
    
    .react-datepicker__day {
      width: 2.5rem;
      line-height: 2.5rem;
      margin: 0.125rem;
      border-radius: 0.5rem;
      transition: all 0.2s ease;
    }
    
    .react-datepicker__day:hover {
      background-color: #f3e8ff;
      color: #7c3aed;
    }
    
    .react-datepicker__day--selected {
      background: linear-gradient(to right, #9333ea, #3b82f6);
      color: white;
      font-weight: 600;
    }
    
    .react-datepicker__day--selected:hover {
      background: linear-gradient(to right, #7c3aed, #2563eb);
    }
    
    .react-datepicker__day--today {
      background-color: #ddd6fe;
      color: #7c3aed;
      font-weight: 600;
    }
    
    .react-datepicker__day--disabled {
      color: #d1d5db;
      cursor: not-allowed;
    }
    
    .react-datepicker__day--disabled:hover {
      background-color: transparent;
    }
    
    .react-datepicker__month-container {
      border-radius: 0.75rem;
    }
    
    .react-datepicker__triangle {
      display: none;
    }
  `;

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="w-full max-w-md p-8 text-center bg-white shadow-2xl rounded-3xl animate-fade-in">
          <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Confirmation Sent!</h2>
          <p className="mb-6 text-gray-600">
            Your time slot confirmation has been successfully sent to VentureTalks Team. We've sent you a confirmation email soon.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setSelectedDate(null);
              setSelectedTime('');
              setNote('');
              setSubmitError('');
            }}
            className="px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700 hover:scale-105"
          >
            Okay
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 ">
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: datePickerCustomStyles }} />
      
      {/* Header 
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl px-4 py-6 mx-auto">
          <h1 className="text-3xl font-bold text-center text-transparent md:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
            Podcast Guest Invitation
          </h1>
        </div>
      </div>*/}

      <div className="max-w-6xl px-4 py-8 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Guest Profile Section */}
          <div className="p-8 bg-white shadow-xl rounded-3xl animate-slide-in-left">
            <div className="mb-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={img}
                  alt="Mr. Alahakoon"
                  className="object-cover w-full h-full border-4 border-purple-600 rounded-full shadow-lg"
                />
              
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">Mr. Malinda Alahakoon</h2>
              <p className="text-lg font-semibold text-purple-600">Education & Tech Expert</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                <h3 className="flex items-center mb-4 text-xl font-bold text-gray-800">
                 
                  About Our Distinguished Guest
                </h3>
                <div className="space-y-4 font-medium leading-relaxed text-gray-700">
                  <p>
                    We deeply admire your extraordinary contributions to education and content creation in Sri 
Lanka. With a science degree and over a decade of lecturing at prestigious universities, your 
academic foundation is impressive. 
                  </p>
                  <p>
                    Your ability to translate complex scientific and tech concepts into engaging video lessons is 
exceptional. Your expertise in AI integration, as shown by your workshops and masterclasses, 
highlights your forward-thinking approach.
                  </p>
                  <p>
                    Your guidance for aspiring entrepreneurs on business and monetization and your role as a 
public speaker training others in digital content and branding, solidify your position as a leading 
voice. Your active presence across various platforms further demonstrates your dedication to 
education.
                  </p>
                  <p>
                    Mr. Alahakoon, your multifaceted contributions make you an invaluable asset to our country. 
Your experiences and insights would be profoundly impactful for our audience.
                  </p>
                  <p className="font-semibold text-purple-700">
    Therefore, we would be honored if you would consider joining us for a podcasting program 
series. We believe your unique journey and perspectives would resonate profoundly with our 
listeners and provide immense value to our discussions.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="p-4 text-center bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">10+</div>
                  <div className="text-sm text-gray-600">Years Teaching</div>
                </div>
                <div className="p-4 text-center bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">AI</div>
                  <div className="text-sm text-gray-600">Integration Expert</div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="p-8 bg-white shadow-xl rounded-3xl animate-slide-in-right">
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-800">
              Select Your Preferred Time Slot
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {submitError && (
                <div className="p-4 text-red-700 border border-red-200 bg-red-50 rounded-xl">
                  {submitError}
                </div>
              )}

              {/* Date Selection */}
              <div>
                <label className="flex items-center mb-3 text-sm font-semibold text-gray-700">
                  <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                  Select Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    placeholderText="Choose a date"
                    dateFormat="EEEE, MMMM d, yyyy"
                    className="w-full p-4 transition-all duration-300 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    calendarClassName="shadow-lg"
                    showPopperArrow={false}
                    popperPlacement="bottom-start"
                  />
                  <Calendar className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="flex items-center mb-3 text-sm font-semibold text-gray-700">
                  <Clock className="w-4 h-4 mr-2 text-purple-600" />
                  Select Time
                </label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedTime === time
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-purple-50 border border-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note Section */}
              <div>
                <label className="flex items-center mb-3 text-sm font-semibold text-gray-700">
                  <MessageSquare className="w-4 h-4 mr-2 text-purple-600" />
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Any specific topics you'd like to discuss or special requirements..."
                  className="w-full p-4 font-normal transition-all duration-300 border border-gray-200 resize-none rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows="4"
                />
              </div>

              {/* Selected Summary */}
              {(selectedDate || selectedTime) && (
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl animate-fade-in">
                  <h4 className="mb-2 font-semibold text-gray-800">Selected Time Slot:</h4>
                  <div className="text-purple-700">
                    {selectedDate && <div>📅 {formatDateForDisplay(selectedDate)}</div>}
                    {selectedTime && <div>🕐 {selectedTime}</div>}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !selectedDate || !selectedTime}
                className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-blue-600 shadow-lg rounded-xl hover:scale-105 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    Sending Confirmation...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Confirm & Send
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Explore;