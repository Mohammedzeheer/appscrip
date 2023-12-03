import React from 'react';
import ThreeCards from './ThreeCards';

const CardList = () => {
  const cardsData = [
    {
      id: 1,
      image: 'images/speaker.png',
      title: 'Save Time with',
      title2: 'Automation and Efficiency',
      description: `Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content`,
    },
    {
      id: 2,
      image: 'images/user.png',
      title: 'Join a Supportive',
      title2: 'Community',
      description: `Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.`,
    },
    {
      id: 3,
      image: 'images/trophy.png',
      title: 'Unlock Exclusive',
      title2: 'Opportunities and Prizes',
      description: 'Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.',
    },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <ThreeCards
          key={card.id}
          image={card.image}
          title={card.title}
          title2={card.title2}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
