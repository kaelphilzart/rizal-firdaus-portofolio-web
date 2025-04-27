"use client";
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const WhatsAppButton = () => {
  const phoneNumber = "+628745477213";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={40} color="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
