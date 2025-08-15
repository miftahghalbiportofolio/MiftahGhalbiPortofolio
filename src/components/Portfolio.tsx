import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

import { ITEMS, CATEGORIES, PortfolioCategory } from "@/data/portfolioItems";

const Portfolio = () => {
  const [active, setActive] = useState<PortfolioCategory>("graphic");

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display tracking-wide">Portfolio / Works</h2>
          <p className="text-muted-foreground mt-2">Beberapa hasil karya pilihan.</p>
        </header>

        <Tabs defaultValue="graphic" value={active} onValueChange={(v) => setActive(v as PortfolioCategory)}>
          <TabsList className="mx-auto mb-8">
            {CATEGORIES.map((c) => (
              <TabsTrigger key={c.key} value={c.key} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((c) => (
            <TabsContent key={c.key} value={c.key}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {ITEMS.filter((i) => i.category === c.key).map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover-scale cursor-pointer">
                        <img src={item.thumb} alt={`${item.title} thumbnail`} loading="lazy" className="w-full h-56 object-cover" />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                        <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent">
                          <span className="font-medium">{item.title}</span>
                          <span className="text-sm text-muted-foreground">Lihat Detail</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                      </DialogHeader>
                      <img src={item.thumb} alt={item.title} className="w-full rounded-md border border-border" />
                      {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary story-link">
                          Buka Sumber <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
