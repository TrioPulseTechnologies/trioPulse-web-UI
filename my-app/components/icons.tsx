import {
  Bot,
  Code2,
  Handshake,
  Layers,
  MessageCircle,
  Search,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Search,
  Bot,
  Layers,
  Users,
  TrendingUp,
  MessageCircle,
  Handshake,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}
