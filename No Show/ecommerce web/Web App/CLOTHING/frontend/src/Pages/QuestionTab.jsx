import React, { useState } from 'react';
import './CSS/Question.css';
const QuestionsTab = () => {
  const [answersVisible, setAnswersVisible] = useState(Array(10).fill(false));

  const toggleAnswer = (index) => {
    const newAnswersVisible = [...answersVisible];
    newAnswersVisible[index] = !newAnswersVisible[index];
    setAnswersVisible(newAnswersVisible);
  };

  return (
    <div className="questions-tab">
      <h3>Frequently Asked Questions</h3>
      <div className="question">
        <h4 onClick={() => toggleAnswer(0)}>Q: How can I contact support?</h4>
        {answersVisible[0] && <p>A: You can contact our support team at LanderStylez@gmail.com</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(1)}>Q: What are your business hours?</h4>
        {answersVisible[1] && <p>A: Our business hours are from 9:00 AM to 5:00 PM, Monday to Friday.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(2)}>Q: Do you offer refunds?</h4>
        {answersVisible[2] && <p>A: Yes, we offer refunds within 30 days of purchase. Please contact support for assistance.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(3)}>Q: How long does shipping take?</h4>
        {answersVisible[3] && <p>A: Shipping typically takes 3-5 business days for domestic orders and 7-10 business days for international orders.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(4)}>Q: Can I return items if they don't fit?</h4>
        {answersVisible[4] && <p>A: Yes, we accept returns for unworn and unwashed items within 30 days of purchase. Please refer to our returns policy for more details.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(5)}>Q: What payment methods do you accept?</h4>
        {answersVisible[5] && <p>A: We accept all major credit cards, PayPal, and other secure payment methods.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(6)}>Q: Do you ship internationally?</h4>
        {answersVisible[6] && <p>A: Yes, we ship our products worldwide.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(7)}>Q: How can I track my order?</h4>
        {answersVisible[7] && <p>A: Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to track your order.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(8)}>Q: Are your products eco-friendly?</h4>
        {answersVisible[8] && <p>A: Yes, we are committed to sustainability and use eco-friendly materials in our products wherever possible.</p>}
      </div>
      <div className="question">
        <h4 onClick={() => toggleAnswer(9)}>Q: Do you offer gift wrapping?</h4>
        {answersVisible[9] && <p>A: Yes, we offer gift wrapping services for a small additional fee. You can select this option during checkout.</p>}
      </div>
    </div>
  );
};

export default QuestionsTab;
