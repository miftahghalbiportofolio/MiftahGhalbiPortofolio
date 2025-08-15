import { useCallback, useState, useEffect } from "react";
import heroImg from "@/assets/hero-image1.png";
import ImgAbout from "@/assets/Img-About.jpg";
import { Button } from "@/components/ui/button";
import FadeInSection from "@/components/FadeInSection";
import ToolIcon from "@/components/ToolIcon";
import Portfolio from "@/components/Portfolio";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Index = () => {
  const { toast } = useToast();

  // Navbar state
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPortfolio = useCallback(() => {
    const el = document.getElementById("portfolio");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const onSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      toast({ title: "Lengkapi form", description: "Nama, email, dan pesan wajib diisi." });
      return;
    }

    // Kirim ke EmailJS
    emailjs
      .send(
        "service_ch1hck2", // ganti dengan Service ID dari EmailJS
        "template_m94ax0r", // ganti dengan Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "89Ac-Mm7hs6tWK2za" // ganti dengan Public Key dari EmailJS
      )
      .then(() => {
        toast({ title: "Terkirim!", description: "Pesan Anda berhasil dikirim." });
        form.reset();
      })
      .catch(() => {
        toast({ title: "Gagal", description: "Pesan gagal dikirim, coba lagi." });
      });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="font-bold text-xl text-primary">Miftah Portofolio</a>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6">
            <a href="#portfolio" className="hover:text-primary transition">Portfolio</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Mobile */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-2">
            <a href="#portfolio" className="block py-2" onClick={() => setIsOpen(false)}>Portfolio</a>
            <a href="#about" className="block py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pt-16">
        <section className="grunge">
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="font-calligraphy text-6xl md:text-7xl leading-none text-primary select-none">Miftah Ghalbi</h1>
                <h2 className="font-display text-2xl md:text-3xl tracking-wide">Video Editor | Graphic Designer | Template Specialist</h2>
                <p className="text-muted-foreground max-w-xl">
                  Menciptakan visual yang menarik perhatian dan meninggalkan kesan mendalam. Dari video editing hingga desain grafis, saya siap membantu brand dan kreator menghadirkan karya yang estetis, profesional, dan tepat sasaran.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="hero" size="lg" onClick={scrollToPortfolio} className="hover-scale">
                    Lihat Portfolio
                  </Button>
                  <a href="#contact" className="story-link text-primary">Kontak Saya</a>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={heroImg}
                    alt="Siluet merah bergaya poster"
                    className="w-full md:h-[460px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* About */}
      <main>
        <FadeInSection>
          <section id="about" className="py-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <div className="rounded-xl overflow-hidden ring-2 ring-primary/60">
                  <img src={ImgAbout} alt="Foto siluet Miftah" className="w-full h-80 object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display tracking-wide">About Me</h2>
                <p className="mt-4 text-muted-foreground">
                  Aku adalah seorang graphic designer dan video editor yang berfokus pada menciptakan karya visual kreatif, mulai dari desain grafis, fotografi, videografi, hingga pembuatan konten digital. Dengan pengalaman di berbagai proyek, aku terbiasa menggabungkan ide segar dan eksekusi profesional untuk menghasilkan karya yang tidak hanya menarik secara visual, tetapi juga memiliki nilai cerita yang kuat.
                </p>
                <a
                  href="CV-MIFTAHGHALBI.pdf"
                  download="CV-MIFTAHGHALBI.pdf"
                  className="inline-block mt-6" 
                  aria-label="Download CV PDF"
                >
                  <Button variant="outline" className="hover-scale">Download CV</Button>
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* My Tools */}
        <FadeInSection>
          <section id="tools" className="py-20">
            <div className="container mx-auto px-4">
              <header className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display tracking-wide">My Tools</h2>
                <p className="text-muted-foreground mt-2">Perangkat utama untuk desain dan editing.</p>
              </header>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-medium mb-4">Design</h3>
                  <div className="flex flex-wrap gap-4">
                    <ToolIcon label="Photoshop" acronym="Ps" desc="Retouching, compositing, color grading grafis." />
                    <ToolIcon label="Illustrator" acronym="Ai" desc="Logo, vektor, dan ilustrasi presisi." />
                    <ToolIcon label="Canva" acronym="Ca" desc="Desain cepat untuk konten media sosial." />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Video</h3>
                  <div className="flex flex-wrap gap-4">
                    <ToolIcon label="Premiere Pro" acronym="Pr" desc="Editing timeline, sound, dan color basic." />
                    <ToolIcon label="After Effects" acronym="Ae" desc="Motion graphics, compositing, dan VFX ringan." />
                    <ToolIcon label="CapCut" acronym="Cc" desc="Editing mobile/cepat untuk short-form." />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Portfolio */}
        <FadeInSection>
          <Portfolio />
        </FadeInSection>

        {/* Contact */}
        <FadeInSection>
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <header className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-display tracking-wide">Contact Me</h2>
                <p className="text-muted-foreground mt-2">Siap kolaborasi? Hubungi saya langsung.</p>
              </header>

              <div className="grid md:grid-cols-2 gap-10">
                {/* Quick Links */}
                <div className="space-y-4">
                  <a
                    href="https://wa.me/6285793670508"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group"
                    aria-label="Hubungi via WhatsApp"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-foreground">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Klik untuk chat langsung</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/miftahghalbi"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-secondary transition-colors group"
                    aria-label="Buka Instagram"
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/15 flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-foreground">Instagram</p>
                      <p className="text-sm text-muted-foreground">Lihat postingan dan highlight</p>
                    </div>
                  </a>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={onSubmitContact}>
                  <div>
                    <label className="block mb-2 text-sm">Nama</label>
                    <Input name="name" placeholder="Nama anda" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <Input type="email" name="email" placeholder="email@domain.com" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Pesan</label>
                    <Textarea name="message" placeholder="Tulis pesan anda..." rows={5} />
                  </div>
                  <Button variant="hero" type="submit" className="hover-scale">Kirim Pesan</Button>
                </form>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Anuhaw Creative Studio</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#portfolio" className="story-link">Portfolio</a>
            <a href="#about" className="story-link">About</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
