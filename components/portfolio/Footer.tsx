type FooterProps = {
  onBackToTop: () => void;
};

export default function Footer({ onBackToTop }: FooterProps) {
  return (
    <footer className="dh-footer">
      <p>Sajith / Motion Graphics Designer / {new Date().getFullYear()}</p>
      <a href="#hero" onClick={onBackToTop}>
        Back to top
      </a>
    </footer>
  )
}
