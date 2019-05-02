import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 125,
  duration: "10m"
};

export default function() {
  let res = http.get(`http://localhost:3000/bookings/${Math.floor(Math.random() * 5000000)}/reserve`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(0.275)
};