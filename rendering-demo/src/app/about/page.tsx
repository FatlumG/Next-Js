export default function AboutPage() {
  const time = new Date().toLocaleTimeString();
  console.log("About server component");

  return <h1>About Page {time}</h1>;
}
