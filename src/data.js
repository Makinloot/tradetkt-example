import bmw from './assets/ticket-imgs/bmw.webp'
import orchestra from './assets/ticket-imgs/orchestra.jpg'
import meeting from './assets/ticket-imgs/meeting.jpg'
import fifa from './assets/ticket-imgs/fifa.jpg'
import football from './assets/ticket-imgs/football.webp'
import nations from './assets/ticket-imgs/nations.jpg'

export const tickets = [
  {
    id: 1,
    day: 25,
    month: 'may',
    year: 2022,
    title: 'BMW Open Championship',
    location: 'tbilisi, georgia',
    background: bmw,
  },
  {
    id: 2,
    day: 26,
    month: 'may',
    year: 2022,
    title: 'Budapest Festival Orchestra',
    location: 'tbilisi, georgia',
    background: orchestra
  },
  {
    id: 3,
    day: 27,
    month: 'may',
    year: 2022,
    title: 'Shark Tank Fans Meeting',
    location: 'tbilisi, georgia',
    background: meeting
  },
  {
    id: 4,
    day: 28,
    month: 'may',
    year: 2022,
    title: 'FIFA WORLD CUP 2022',
    location: 'qatar',
    background: fifa
  },
  {
    id: 5,
    day: 29,
    month: 'may',
    year: 2022,
    title: 'Prep Footbal America',
    location: 'georgia',
    background: football
  },
  {
    id: 6,
    day: 29,
    month: 'may',
    year: 2022,
    title: 'UEFA Nations League',
    location: 'tbilisi, georgia',
    background: nations
  },
]

export const sliderData = [
  {
    id: 1,
    month: 'january',
    year: 2022
  },
  {
    id: 2,
    month: 'february',
    year: 2022
  },
  {
    id: 3,
    month: 'march',
    year: 2022
  },
  {
    id: 4,
    month: 'april',
    year: 2022
  },
  {
    id: 5,
    month: 'may',
    year: 2022
  },
  {
    id: 6,
    month: 'june',
    year: 2022
  },
  {
    id: 7,
    month: 'july',
    year: 2022
  },
  {
    id: 8,
    month: 'august',
    year: 2022
  },
  {
    id: 9,
    month: 'september',
    year: 2022
  },
  {
    id: 10,
    month: 'october',
    year: 2022
  },
  {
    id: 11,
    month: 'november',
    year: 2022
  },
  {
    id: 12,
    month: 'december',
    year: 2022
  },
]

import male from './assets/user-male.png'
import female from './assets/user-female.png'

export const rowTickets = [
  {
    date: '1 Oct. 21',
    status: 'verified',
    customer: 'giorgi maisuradze',
    purchased: 'ZEG Tbilisi Storytelling Festival',
    price: '40₾',
    icon: male
  },
  {
    date: '12 Oct. 21',
    status: 'unverified',
    customer: 'natalia partskhaidze',
    purchased: 'ZEG Tbilisi Storytelling Festival',
    price: '50₾',
    icon: female
  },
  {
    date: '1 Nov. 21',
    status: 'verified',
    customer: 'tamta davitaia',
    purchased: 'ZEG Tbilisi Storytelling Festival',
    price: '50₾',
    icon: female
  },
  {
    date: '19 Oct. 21',
    status: 'verified',
    customer: 'travis head',
    purchased: 'ZEG Tbilisi Storytelling Festival',
    price: '60₾',
    icon: male
  },
  {
    date: '1 Oct. 21',
    status: 'verified',
    customer: 'nino kurashvili',
    purchased: 'ZEG Tbilisi Storytelling Festival',
    price: '70₾',
    icon: female
  },
]