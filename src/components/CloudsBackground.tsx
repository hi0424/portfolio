type Props = {
  isHero?: boolean;
};

export default function CloudsBackground({ isHero = false }: Props) {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: isHero
          ? "url('/about-hero.png')"
          : "url('/clouds.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
