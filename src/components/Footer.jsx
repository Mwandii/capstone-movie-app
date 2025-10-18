function Footer() {
  return (
    <footer className="bg-black text-stone-300 py-10 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} OneMoreEpisode. All rights reserved.
      </p>
      <p className="italic ">Because there is always time for one more episode!</p>
    </footer>
  );
}

export default Footer;
