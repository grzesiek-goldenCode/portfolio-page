"use client";
import { motion } from "framer-motion";

type ListItemProps = {
  title: string;
  description: string;
};

export default function ListItem({ title, description }: ListItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col rounded-xl p-3 my-2 ml-3 h-full bg-white border border-dotted border-gray-200/80"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
