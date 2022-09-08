import React from 'react';
import { Breadcrumb as B, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import './Breadcrumb.css';

const Breadcrumb = ({ links }) => {
  return (
    <B spacing='8px' separator={<img src='/icons/ic_breadcrumb.svg' alt='breadcrumb' />}>
      {links.map((link) => (
        <BreadcrumbItem key={link.id}>
          <BreadcrumbLink href={links.href} isCurrentPage={link.isCurrentPage}>
            <p className={link.isCurrentPage ? 'text-breadcrumb bold' : 'text-xs bold'}>
              {link.label}
            </p>
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </B>
  );
};

export default Breadcrumb;
