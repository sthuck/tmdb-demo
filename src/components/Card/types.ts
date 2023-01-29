import React from "react";

export interface CardProps {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  metadataRow: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
