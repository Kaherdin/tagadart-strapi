import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    text: Attribute.String;
  };
}

export interface SectionTestimonials extends Schema.Component {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'server';
  };
  attributes: {
    content: Attribute.RichText;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
  };
}

export interface SectionPageIntro extends Schema.Component {
  collectionName: 'components_section_page_intros';
  info: {
    displayName: 'Page Intro';
    icon: 'house';
  };
  attributes: {
    title: Attribute.String;
    eyebrow: Attribute.String;
    description: Attribute.RichText;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionCta extends Schema.Component {
  collectionName: 'components_section_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    eyebrow: Attribute.String;
    contentadasd: Attribute.String;
    content: Attribute.RichText;
    Buttons: Attribute.Component<'elements.button', true>;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.button': ElementsButton;
      'section.testimonials': SectionTestimonials;
      'section.page-intro': SectionPageIntro;
      'section.cta': SectionCta;
    }
  }
}
