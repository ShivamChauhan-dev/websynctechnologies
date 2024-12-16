import { useState } from 'react';

export function useGetStarted() {
  const [isLoading, setIsLoading] = useState(false);

  const submitGetStarted = async (data) => {
    setIsLoading(true);
    try {
      // In a real application, you would make an API call here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Form submitted:', data);
      // You can add actual API integration here
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { submitGetStarted, isLoading };
}
