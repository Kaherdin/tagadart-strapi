import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsTextZone extends Schema.Component {
  collectionName: 'components_elements_text_zones';
  info: {
    displayName: 'Text Zone';
    icon: 'filter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

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

export interface ElementsAuthor extends Schema.Component {
  collectionName: 'components_elements_authors';
  info: {
    displayName: 'Author';
    description: '';
  };
  attributes: {
    fullname: Attribute.String;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface SectionTestimonials extends Schema.Component {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'TestimonialsSection';
    icon: 'server';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
    avatar: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    testimonials: Attribute.Relation<
      'section.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    eyebrow: Attribute.String;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionTeamSection extends Schema.Component {
  collectionName: 'components_section_team_sections';
  info: {
    displayName: 'TeamSection';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    members: Attribute.Relation<
      'section.team-section',
      'oneToMany',
      'api::member.member'
    >;
    eyebrow: Attribute.String;
  };
}

export interface SectionServicesSection extends Schema.Component {
  collectionName: 'components_section_services_sections';
  info: {
    displayName: 'ServicesSection';
    icon: 'crown';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    our_services: Attribute.Relation<
      'section.services-section',
      'oneToMany',
      'api::our-service.our-service'
    >;
    eyebrow: Attribute.String;
  };
}

export interface SectionReferenceSection extends Schema.Component {
  collectionName: 'components_section_reference_sections';
  info: {
    displayName: 'ReferenceSection';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    clients: Attribute.Relation<
      'section.reference-section',
      'oneToMany',
      'api::client.client'
    >;
    eyebrow: Attribute.String;
  };
}

export interface SectionProjectsSection extends Schema.Component {
  collectionName: 'components_section_projects_sections';
  info: {
    displayName: 'ProjectsSection';
    icon: 'archive';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    projects: Attribute.Relation<
      'section.projects-section',
      'oneToMany',
      'api::project.project'
    >;
    eyebrow: Attribute.String;
  };
}

export interface SectionPageIntro extends Schema.Component {
  collectionName: 'components_section_page_intros';
  info: {
    displayName: 'Page Intro';
    icon: 'house';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    eyebrow: Attribute.String;
    content: Attribute.RichText;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionCultureSection extends Schema.Component {
  collectionName: 'components_section_culture_sections';
  info: {
    displayName: 'CultureSection';
    icon: 'cube';
    description: '';
  };
  attributes: {
    values: Attribute.Component<'elements.text-zone', true>;
    content: Attribute.RichText;
    classIcon: Attribute.String;
    link: Attribute.String;
    title: Attribute.String;
    eyebrow: Attribute.String;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionCta extends Schema.Component {
  collectionName: 'components_section_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    eyebrow: Attribute.String;
    content: Attribute.RichText;
    Buttons: Attribute.Component<'elements.button', true>;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionBlogSection extends Schema.Component {
  collectionName: 'components_section_blog_sections';
  info: {
    displayName: 'BlogSection';
    icon: 'message';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    content: Attribute.RichText;
    posts: Attribute.Relation<
      'section.blog-section',
      'oneToMany',
      'api::post.post'
    >;
    eyebrow: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.text-zone': ElementsTextZone;
      'elements.button': ElementsButton;
      'elements.author': ElementsAuthor;
      'section.testimonials': SectionTestimonials;
      'section.team-section': SectionTeamSection;
      'section.services-section': SectionServicesSection;
      'section.reference-section': SectionReferenceSection;
      'section.projects-section': SectionProjectsSection;
      'section.page-intro': SectionPageIntro;
      'section.culture-section': SectionCultureSection;
      'section.cta': SectionCta;
      'section.blog-section': SectionBlogSection;
    }
  }
}
