export default function CloudsBackground() {
  return (
    <div
      className="fixed inset-0 -z-20"
      style={{
        backgroundImage: "url('/clouds.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
