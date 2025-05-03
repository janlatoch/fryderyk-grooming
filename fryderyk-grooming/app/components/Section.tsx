import type { ReactNode } from 'react';

interface Props {
  title?: string;
  description?: string;
  yPadding?: string;
  id?: string;
  children: ReactNode;
};

export const Section = ({
  title,
  yPadding,
  description,
  children,
  id = ""
}: Props) => (
  <div
    className={`mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 ${yPadding ? yPadding : 'py-16'
      }`}
  >
    {(title || description) && (
      <div className="mb-4">
        {title && (
          <h2 className="text-4xl font-bold text-gray-900" id={id}>{title}</h2>
        )}
        {description && (
          <div className="mt-4 text-xl md:px-20">{description}</div>
        )}
      </div>
    )}
    {children}
  </div>
);
