import React, { useState, useEffect } from 'react';

const PhoneList = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);

  useEffect(() => {
    const fetchPhoneNumbers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/phonenumbers/');
        const data = await response.json();
        setPhoneNumbers(data);
      } catch (error) {
        console.error('Error fetching phone numbers:', error);
      }
    };

    fetchPhoneNumbers();
  }, []);

  return (
    <div>
      <h2>Phone Numbers List</h2>
      <ul>
        {phoneNumbers.map((phoneNumber) => (
          <li key={phoneNumber.id}>
            {phoneNumber.country} - {phoneNumber.country_code} {phoneNumber.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList; 