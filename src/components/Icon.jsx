import {
  Accessibility, ArrowLeftToLine, Bot, Boxes, Brain, Building2, Calendar, Gauge, Play, Code2, Coins, Database,
  Dna, Eye, GitBranch, Globe, Handshake, Lightbulb, ListChecks, Lock, MessageSquare,
  Mic, Plug, Route, Scale, Search, Share2, ShieldCheck, Smartphone, Sparkles, Split,
  Target, Users, Wrench,
} from 'lucide-react'

// Content refers to icons by string key; this is the only place icons are imported.
const map = {
  accessibility: Accessibility, arrowLeft: ArrowLeftToLine, bot: Bot, boxes: Boxes, brain: Brain,
  calendar: Calendar, code: Code2, coins: Coins, database: Database, dna: Dna, eye: Eye,
  gitBranch: GitBranch, globe: Globe, handshake: Handshake, lightbulb: Lightbulb,
  listCheck: ListChecks, lock: Lock, message: MessageSquare, mic: Mic, plug: Plug,
  route: Route, scale: Scale, search: Search, share: Share2, shield: ShieldCheck,
  smartphone: Smartphone, sparkles: Sparkles, split: Split, target: Target, users: Users,
  wrench: Wrench, building: Building2, gauge: Gauge, play: Play,
}

export default function Icon({ name, size = 20, ...rest }) {
  const C = map[name]
  if (!C) return null
  return <C size={size} aria-hidden="true" {...rest} />
}
