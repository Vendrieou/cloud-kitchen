"use client";

import { useState } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import HeaderMenuItem from '@/components/common/HeaderMenuItem';

const WHATSAPP_NUMBER = '+6281377356803';
// Define the TypeScript interface for the form data structure
interface ContactForm {
  name: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  // Initialize state with the ContactForm interface
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error' | null, text: string } | null>(null)

  // Apply explicit types to the handler arguments
  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting || !formData.name || !formData.message) {
      setSubmitMessage({ type: 'error', text: 'Please fill out your name and message before proceeding.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    // 1. Construct the message body for WhatsApp
    const messageTemplate =
      `New Message from Website Contact Form\n` +
      `----------------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Message: ${formData.message}`;

    // 2. URL encode the message
    const encodedMessage = encodeURIComponent(messageTemplate);

    // 3. Construct the final WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // NOTE: The placeholder check was removed here as it was causing a TypeScript error
    // and the number is already configured.

    // 4. Redirect the user to the WhatsApp link
    // Note: Use window.open() to prevent navigation issues in some environments
    window.open(whatsappUrl, '_blank');

    // Provide visual feedback for the user after redirection
    setSubmitMessage({
      type: 'success',
      text: 'Redirecting to WhatsApp... Please send the pre-filled message.'
    });
    setFormData({ name: '', phone: '', message: '' }); // Clear form

    // Minor delay before resetting state to ensure feedback is seen
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSubmitting(false);
    setSubmitMessage(null);
  }

  const messageClasses = submitMessage?.type === 'success'
    ? 'bg-green-100 border-green-400 text-green-700'
    : 'bg-red-100 border-red-400 text-red-700';

  const menuItems = [
    { text: "Home", href: "#hero" },
    { text: "Today Menu", href: "#menu" },
    { text: "About Us", href: "#about" },
    { text: "Contact Us", href: "#contact" }
  ]

  return (
    <section id="contact" className="w-full relative">
      <div className="w-full">

        {/* Contact Section Container */}
        <div className="relative w-full min-h-[700px] sm:min-h-[800px] lg:min-h-[900px]">

          {/* Background Wave with Title - This is the main visual element */}
          <div
            // We set a minimum height for the background element to ensure the wave is visible
            className="w-full h-[600px] sm:h-[700px] lg:h-[800px] bg-cover bg-center flex items-start justify-center"
            style={{
              backgroundImage: "url('/images/img_vector_3.png')", // Assuming this wave is the background
            }}
          >
            {/* Contact Us Title - High Contrast TEXT (White) */}
            <h2 className="text-[#ffffff] text-[48px] sm:text-[72px] lg:text-[96px] font-normal leading-[71px] sm:leading-[106px] lg:leading-[141px] text-center mt-[40px] sm:mt-[60px] lg:mt-[80px] drop-shadow-lg">
              Contact Us
            </h2>
          </div>

          {/* Contact Form Card - Positioned relative to the content flow after the wave image */}
          <div className="relative z-10 w-full max-w-lg mx-auto mt-[-300px] sm:mt-[-350px] lg:mt-[-400px] p-6 sm:p-10 lg:p-12 bg-[#43b6b2e5] rounded-[78px] shadow-2xl backdrop-blur-sm">

            <p className="text-[#f7f7f7] text-center text-2xl sm:text-3xl lg:text-4xl font-normal font-indie mb-8 drop-shadow-md">
              We'd love to hear from you!
            </p>
            {submitMessage && (
              <div className={`p-3 mb-4 border rounded-lg font-medium text-center ${messageClasses}`}>
                {submitMessage.text}
              </div>
            )}
            <div className="flex flex-col gap-6 sm:gap-8">

              {/* Name Field Group with Label */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[#f7f7f7] text-lg sm:text-xl lg:text-2xl font-semibold font-indie">
                  Your Name
                </label>
                <EditText
                  id="name"
                  value={formData.name}
                  // Type safe call using 'name' as a keyof ContactForm
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., Jane Doe"
                />
              </div>

              {/* Phone Field Group with Label */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[#f7f7f7] text-lg sm:text-xl lg:text-2xl font-semibold font-indie">
                  Phone Number
                </label>
                <EditText
                  id="phone"
                  value={formData.phone}
                  // Type safe call using 'phone' as a keyof ContactForm
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="e.g., +628123456789"
                />
              </div>

              {/* Message Field Group with Label */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[#f7f7f7] text-lg sm:text-xl lg:text-2xl font-semibold font-indie">
                  Your Message
                </label>
                <EditText
                  id="message"
                  value={formData.message}
                  // Type safe call using 'message' as a keyof ContactForm
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="How can we help you?"
                  isTextArea
                />
              </div>

              <Button
                text="Send Message"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                }}
                className="mt-4"
              />
            </div>
          </div>
        </div>
        {/* Footer Navigation - Uses a large negative margin to seamlessly integrate with the form section */}
        <div
          className="relative w-full h-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-[#151538] flex flex-col items-center justify-end pb-[40px] sm:pb-[60px] lg:pb-[80px] px-[22px] sm:px-[33px] lg:px-[44px] mt-[-100px] sm:mt-[-150px] lg:mt-[-200px] rounded-t-[100px] sm:rounded-t-[150px] lg:rounded-t-[200px]"
        >
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center justify-center w-full max-w-[80%] mb-6 sm:mb-8 lg:mb-10">
            {menuItems.map((item, index) => (
              <HeaderMenuItem
                key={index}
                text={item.text}
                href={item.href}
              />
            ))}
          </nav>

          <p className="text-[#f7f7f7] text-sm sm:text-base">© {new Date().getFullYear()} Cloud Kitchen. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
