import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg',
    address: 'Some adress',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg',
    address: 'Some adress',
    description: 'This is a Second meetup',
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kaiser_Wilhelm_II_of_Germany_-_1902.jpg',
    address: 'Some adress',
    description: 'This is a Third meetup',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
