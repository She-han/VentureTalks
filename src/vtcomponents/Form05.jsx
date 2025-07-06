import React, { useState } from 'react';
import { Calendar, MessageSquare, Send, Check, MapPin, CheckCircle, XCircle, Phone } from 'lucide-react';
import DatePicker from 'react-datepicker';
import emailjs from '@emailjs/browser';
import "react-datepicker/dist/react-datepicker.css";
import img from '../assets/hameed_pic.jpeg';

const Explore = () => {
  const [invitationAccepted, setInvitationAccepted] = useState(null); // null, true, false
  const [selectedDates, setSelectedDates] = useState([]); // Array of dates
  const [selectedLocation, setSelectedLocation] = useState('');
  const [otherLocationDetails, setOtherLocationDetails] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [note, setNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_3uvjq4b',
    TEMPLATE_ID: 'template_fuk77xu',
    PUBLIC_KEY: 'h1tB227NuN2rpN6eM'
  };

  // Location options
  const locationOptions = [
    { value: 'guest_home', label: 'My Home/Office' },
    { value: 'university', label: 'University of Ruhuna' },
    { value: 'other', label: 'Other Location' }
  ];

  const handleDateSelect = (date) => {
    const dateString = date.toISOString().split('T')[0];
    
    if (selectedDates.find(d => d.toISOString().split('T')[0] === dateString)) {
      // Remove date if already selected
      setSelectedDates(selectedDates.filter(d => d.toISOString().split('T')[0] !== dateString));
    } else {
      // Add date if not selected (limit to 5 dates)
      if (selectedDates.length < 5) {
        setSelectedDates([...selectedDates, date]);
      }
    }
  };

  const sendEmailNotification = async (formData) => {
    try {
      // Format dates for email
      const formattedDates = formData.dates.map(date => {
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }).join('\n');

      // Format location for email
      let locationText = '';
      switch (formData.location) {
        case 'guest_home':
          locationText = 'My Home/Office';
          break;
        case 'university':
          locationText = 'University of Ruhuna';
          break;
        case 'other':
          locationText = `Other Location: ${formData.otherLocationDetails}`;
          break;
        default:
          locationText = 'Not specified';
      }

      const templateParams = {
        guest_name: 'Mr. Fouzul Hameed',
        invitation_status: formData.invitationAccepted ? 'ACCEPTED' : 'DECLINED',
        selected_dates: formattedDates,
        selected_location: locationText,
        contact_number: formData.contactNumber || 'Not provided',
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
        submitted_by: 'Fouzul'
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
    
    if (invitationAccepted === null) {
      alert('Please accept or decline the invitation first');
      return;
    }

    if (invitationAccepted && (selectedDates.length === 0 || !selectedLocation)) {
      alert('Please select at least one date and location');
      return;
    }

    if (invitationAccepted && selectedLocation === 'other' && !otherLocationDetails.trim()) {
      alert('Please specify the other location details');
      return;
    }

    setIsLoading(true);
    setSubmitError('');
    
    const formData = {
      invitationAccepted,
      dates: selectedDates,
      location: selectedLocation,
      otherLocationDetails: otherLocationDetails,
      contactNumber: contactNumber,
      note: note
    };

    try {
      const emailResult = await sendEmailNotification(formData);
      
      if (emailResult.success) {
        // Save to localStorage
        const submissions = JSON.parse(localStorage.getItem('podcastSubmissions') || '[]');
        submissions.push({
          invitationAccepted,
          dates: selectedDates.map(d => d.toISOString().split('T')[0]),
          location: selectedLocation,
          otherLocationDetails: otherLocationDetails,
          contactNumber: contactNumber,
          note: note,
          timestamp: new Date().toISOString(),
          guestName: 'Mr. Fouzul Hameed',
          submittedBy: 'Fouzul',
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
      setSubmitError('Failed to send response. Please try again.');
      
      // Save to localStorage even if email fails
      const submissions = JSON.parse(localStorage.getItem('podcastSubmissions') || '[]');
      submissions.push({
        invitationAccepted,
        dates: selectedDates.map(d => d.toISOString().split('T')[0]),
        location: selectedLocation,
        otherLocationDetails: otherLocationDetails,
        contactNumber: contactNumber,
        note: note,
        timestamp: new Date().toISOString(),
        guestName: 'Mr. Fouzul Hameed',
        submittedBy: 'Fouzul',
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
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            {invitationAccepted ? 'Invitation Accepted!' : 'Response Sent!'}
          </h2>
          <p className="mb-6 text-gray-600">
            {invitationAccepted 
              ? 'Your availability has been successfully sent to VentureTalks Team. We will contact you soon to confirm the final details.'
              : 'Thank you for your response. We understand and appreciate you taking the time to consider our invitation.'
            }
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setInvitationAccepted(null);
              setSelectedDates([]);
              setSelectedLocation('');
              setOtherLocationDetails('');
              setContactNumber('');
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
    <div className="min-h-screen bg-gray-100 w-[100%] dark:bg-gray-900" id="form">
      <style dangerouslySetInnerHTML={{ __html: datePickerCustomStyles }} />
      
      <div className="w-[81%] py-8 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Guest Profile Section */}
          <div className="p-8 bg-white shadow-xl dark:bg-gray-800 rounded-3xl">
            <div className="mb-8 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={img}
                  alt="Mr. Alahakoon"
                  className="object-cover w-full h-full border-4 border-purple-600 rounded-full shadow-lg"
                />
              </div>
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Mr. Fouzul Hameed</h2>
              <p className="text-lg font-semibold text-purple-600">Chairman of Hameedia Group</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl">
                <div className="space-y-4 font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  <p>
                    We deeply admire your extraordinary contributions to Sri Lanka, transforming Hameedia Group 
from a family tailoring shop into an internationally recognized fashion powerhouse. Your 
visionary leadership is evident in the diverse brand portfolio and global expansion of Envoy 
London. 
                  </p>
                  <p>
                   Beyond your remarkable success in fashion, your commitment to social responsibility through 
the My Friend Foundation and the "English for All" program is truly commendable, uplifting 
thousands of underprivileged children. Your achievements have earned Hameedia numerous 
accolades, making it a pioneering force in the industry. Your personal philosophy of honesty and 
ethical business practices, coupled with your dedication to community, sets a powerful example 
for all.
                  </p>
                                    <p>
Mr. Hameed, your multifaceted contributions make you an invaluable icon in Sri Lanka. Your 
experiences and insights would be profoundly impactful for our audience.
                  </p>

                  <p>
                   Therefore, we would be honored if you would consider joining us for a podcasting program 
series. We believe your unique journey and perspectives would resonate profoundly with our 
listeners and provide immense value to our discussions. We eagerly await the opportunity to 
discuss this further with you at your convenience.
                  </p>
                  <p className="font-semibold text-purple-700 dark:text-purple-300">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Section */}
          <div className="p-8 bg-white shadow-xl dark:bg-gray-800 rounded-3xl">
            <h3 className="mb-6 text-2xl font-bold text-center text-gray-800 dark:text-white">
              Podcast Invitation Response
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {submitError && (
                <div className="p-4 text-red-700 border border-red-200 bg-red-50 rounded-xl">
                  {submitError}
                </div>
              )}

              {/* Invitation Response */}
              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Do you accept this podcast invitation?
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setInvitationAccepted(true)}
                    className={`flex-1 p-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
                      invitationAccepted === true
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Yes, I Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setInvitationAccepted(false)}
                    className={`flex-1 p-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
                      invitationAccepted === false
                        ? 'bg-red-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30'
                    }`}
                  >
                    <XCircle className="w-5 h-5 mr-2" />
                    No, I Decline
                  </button>
                </div>
              </div>

              {/* Show scheduling options only if invitation is accepted */}
              {invitationAccepted === true && (
                <>
                  {/* Date Selection */}
                  <div>
                    <label className="flex items-center mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      Select your available dates from October 2025 onwards (up to 5)
                    </label>
                    <div className="relative">
                      <DatePicker
                        selected={null}
                        onChange={handleDateSelect}
                        minDate={new Date(2025, 9, 1)}
                        placeholderText="Click to select multiple dates"
                        dateFormat="EEEE, MMMM d, yyyy"
                        className="w-full p-4 font-normal transition-all duration-300 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        calendarClassName="shadow-lg"
                        showPopperArrow={false}
                        popperPlacement="bottom-start"
                        highlightDates={selectedDates}
                      />
                      <Calendar className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 pointer-events-none right-4 top-1/2" />
                    </div>
                    
                    {/* Selected Dates Display */}
                    {selectedDates.length > 0 && (
                      <div className="mt-4 space-y-3">
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300">Selected Dates:</h4>
                        <div className="space-y-2">
                          {selectedDates.map((date, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-purple-50 dark:bg-purple-900/30">
                              <span className="font-medium text-gray-800 dark:text-white">
                                📅 {formatDateForDisplay(date)}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleDateSelect(date)}
                                className="text-sm font-medium text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedDates.length}/5 dates selected
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Location Selection */}
                  <div>
                    <label className="flex items-center mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      Preferred Location
                    </label>
                    <div className="space-y-2">
                      {locationOptions.map((location) => (
                        <button
                          key={location.value}
                          type="button"
                          onClick={() => setSelectedLocation(location.value)}
                          className={`w-full p-4 text-left rounded-xl font-medium transition-all duration-300 ${
                            selectedLocation === location.value
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 border border-gray-200 dark:border-gray-600'
                          }`}
                        >
                          {location.label}
                        </button>
                      ))}
                    </div>

                    {/* Other Location Details */}
                    {selectedLocation === 'other' && (
                      <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          Please specify the location:
                        </label>
                        <input
                          type="text"
                          value={otherLocationDetails}
                          onChange={(e) => setOtherLocationDetails(e.target.value)}
                          placeholder="e.g., Colombo Office, Hotel Conference Room, etc."
                          className="w-full p-3 font-normal transition-all duration-300 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    )}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="flex items-center mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      <Phone className="w-4 h-4 mr-2 text-purple-600" />
                      Contact Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="e.g., +94 77 123 4567"
                      className="w-full p-4 font-normal transition-all duration-300 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                      We'll use this to coordinate the podcast recording session
                    </p>
                  </div>
                </>
              )}

              {/* Note Section */}
              <div>
                <label className="flex items-center mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <MessageSquare className="w-4 h-4 mr-2 text-purple-600" />
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={invitationAccepted === true 
                    ? "Any specific topics you'd like to discuss or special requirements..."
                    : "Thank you for considering our invitation. If you'd like to share any feedback or thoughts, please feel free to do so here."
                  }
                  className="w-full p-4 font-normal transition-all duration-300 border border-gray-200 resize-none dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || invitationAccepted === null}
                className="w-full py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-blue-600 shadow-lg rounded-xl hover:scale-105 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    Sending Response...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    {invitationAccepted === true ? 'Send Availability' : invitationAccepted === false ? 'Send Decline' : 'Send Response'}
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
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Explore;