import { Users, Centers, Events } from '../../src/models';

export const users = [
  {
    password: '$2a$10$OJb9n4vF5R3INzItIR4DIeBdwOeLSSVt2L3S9ysYd8iji5L5IUVq',
    isSuperAdmin: false,
    isAdmin: false,
    role: 'User',
    email: 'idrees@idreeskun.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'idreeskun'
  },
  {
    password: '$2a$10$wwZDpim.vbujY2aUzR2dVed7jgYssCdZ2JGZcW67wLBgmeCe1pC',
    isSuperAdmin: true,
    isAdmin: true,
    role: 'superAdmin',
    email: 'idrees@idreeskunsan.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'idreessan'
  },
  {
    password: '$2a$10$25ITZ2TUYUW54qlVWTGVX.CwoKhoIS4PZ0IFZszMqqAeoBNMv7Gu',
    isSuperAdmin: false,
    isAdmin: true,
    role: 'Admin',
    email: 'test@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'test'
  }
];

export const events = [
  {
    description: 'This dinner is meant to be attended by all the D0 fellows ',
    imgUrl: 'This image was posted by Faith as a new event',
    time: '10:20 PM',
    type: 'private',
    title: 'The Phoenix Party',
    date: '2020-05-26',
    center: 'Ketu-ojota-mall',
    userId: 9,
    centerId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    description: 'This dinner is meant to be attended by all the D0 fellows ',
    imgUrl: 'This image was posted by Faith as a new event',
    time: '10:20 PM',
    type: 'private',
    title: 'The Phoenix Party',
    date: '2020-05-26',
    center: 'Ketu-ojota-mall',
    userId: 1,
    centerId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const centers = [
  {
    id: 1,
    description: 'THis is a center from a superAdmin user',
    name: 'Ketu-ojota-mall',
    status: 'Free',
    imgUrl: 'this is just a placeholder for images',
    owner: 'SuperAdmin-baba',
    capacity: 3000,
    location: 'Ketu',
    address: 'Ketu ojota mai-twef',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    description: 'WE taking over, one city at a time',
    name: 'Maryland Mall',
    status: 'Free',
    imgUrl: 'this is just a placeholder for images',
    owner: 'Me-kun-mi',
    capacity: 3000,
    location: 'Maryland',
    address: 'Lekki, phase 2 Eti Osa Lagos State',
    userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export const seedUser = () => {
  Users.bulkCreate(users);
};

export const seedCenter = () => {
  Centers.bulkCreate(centers);
};