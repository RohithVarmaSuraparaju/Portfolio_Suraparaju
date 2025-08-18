interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="skill-card p-4 rounded-lg text-center group cursor-pointer">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;