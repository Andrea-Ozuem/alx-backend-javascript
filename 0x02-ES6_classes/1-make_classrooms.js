import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const res = [];
  let room = new ClassRoom(19);
  res.push(room);
  room = new ClassRoom(20);
  res.push(room);
  room = new ClassRoom(34);
  res.push(room);
  return res;
}
