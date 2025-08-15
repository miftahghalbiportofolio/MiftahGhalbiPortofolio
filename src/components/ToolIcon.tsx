import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ToolIconProps {
  label: string; // e.g., Photoshop
  acronym: string; // e.g., Ps
  desc: string;
}

const ToolIcon = ({ label, acronym, desc }: ToolIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-secondary text-secondary-foreground border border-border flex items-center justify-center font-bold text-xl md:text-2xl hover-scale cursor-default select-none"
          aria-label={label}
          title={label}
        >
          {acronym}
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm"><span className="font-medium text-primary">{label}:</span> {desc}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolIcon;
