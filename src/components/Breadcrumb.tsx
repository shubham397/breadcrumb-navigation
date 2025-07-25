import React from "react";
import "./breadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = "›" }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="breadcrumb-item">
              {!isLast && item.link ? (
                <a href={item.link} className="breadcrumb-link">
                  {item.label}
                </a>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
              {!isLast && (
                <span className="breadcrumb-separator">{separator}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
