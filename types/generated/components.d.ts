import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
    description: '';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionTextSection extends Schema.Component {
  collectionName: 'components_section_text_sections';
  info: {
    displayName: 'Text Section';
    icon: 'write';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface SectionTestimonials extends Schema.Component {
  collectionName: 'components_section_testimonials';
  info: {
    displayName: 'Testimonials Section';
    icon: 'server';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Relation<
      'section.testimonials',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
  };
}

export interface SectionTeamSection extends Schema.Component {
  collectionName: 'components_section_team_sections';
  info: {
    displayName: 'Team Section';
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
    sectionIntro: Attribute.Component<'elements.section-intro'>;
  };
}

export interface SectionServicesSection extends Schema.Component {
  collectionName: 'components_section_services_sections';
  info: {
    displayName: 'Services Section';
    icon: 'crown';
    description: '';
  };
  attributes: {
    our_services: Attribute.Relation<
      'section.services-section',
      'oneToMany',
      'api::our-service.our-service'
    >;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
  };
}

export interface SectionReferenceSection extends Schema.Component {
  collectionName: 'components_section_reference_sections';
  info: {
    displayName: 'Reference Section';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    clients: Attribute.Relation<
      'section.reference-section',
      'oneToMany',
      'api::client.client'
    >;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
  };
}

export interface SectionProjectsSection extends Schema.Component {
  collectionName: 'components_section_projects_sections';
  info: {
    displayName: 'Projects Section';
    icon: 'archive';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'section.projects-section',
      'oneToMany',
      'api::project.project'
    >;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
    pagination: Attribute.Component<'elements.pagination'>;
  };
}

export interface SectionPricingSection extends Schema.Component {
  collectionName: 'components_section_pricing_sections';
  info: {
    displayName: 'Pricing Section';
    description: '';
  };
  attributes: {
    sectionIntro: Attribute.Component<'elements.section-intro'>;
    cards: Attribute.Component<'elements.pricing-card', true>;
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
    title: Attribute.String & Attribute.Required;
    eyebrow: Attribute.String;
    content: Attribute.RichText;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    buttons: Attribute.Component<'elements.button', true>;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
  };
}

export interface SectionFeaturesSection extends Schema.Component {
  collectionName: 'components_section_features_sections';
  info: {
    displayName: 'Features Section';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    sectionIntro: Attribute.Component<'elements.section-intro'>;
    features: Attribute.Component<'elements.features', true>;
  };
}

export interface SectionCultureSection extends Schema.Component {
  collectionName: 'components_section_culture_sections';
  info: {
    displayName: 'Culture Section';
    icon: 'cube';
    description: '';
  };
  attributes: {
    values: Attribute.Component<'elements.text-zone', true>;
    classIcon: Attribute.String;
    link: Attribute.String;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
  };
}

export interface SectionCta extends Schema.Component {
  collectionName: 'components_section_cta_sections';
  info: {
    displayName: 'CTA Section';
    description: '';
  };
  attributes: {
    buttons: Attribute.Component<'elements.button', true>;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
    align: Attribute.Enumeration<['left', 'center', 'right']>;
  };
}

export interface SectionContactSection extends Schema.Component {
  collectionName: 'components_section_contact_sections';
  info: {
    displayName: 'Contact Section';
    description: '';
  };
  attributes: {
    sectionIntro: Attribute.Component<'elements.section-intro'>;
    content: Attribute.Component<'elements.contact-content'>;
    formEnabled: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SectionBlogSection extends Schema.Component {
  collectionName: 'components_section_blog_sections';
  info: {
    displayName: 'Blog Section';
    icon: 'message';
    description: '';
  };
  attributes: {
    posts: Attribute.Relation<
      'section.blog-section',
      'oneToMany',
      'api::post.post'
    >;
    sectionIntro: Attribute.Component<'elements.section-intro'>;
    pagination: Attribute.Component<'elements.pagination'>;
  };
}

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

export interface ElementsSocialNetwork extends Schema.Component {
  collectionName: 'components_elements_social_networks';
  info: {
    displayName: 'Social Network';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    icon: Attribute.String & Attribute.Required;
  };
}

export interface ElementsSectionIntro extends Schema.Component {
  collectionName: 'components_elements_section_intros';
  info: {
    displayName: 'Section Intro';
    description: '';
  };
  attributes: {
    eyebrow: Attribute.String;
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText;
    cover: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsPricingFeature extends Schema.Component {
  collectionName: 'components_elements_pricing_features';
  info: {
    displayName: 'Pricing Feature';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    included: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    price: Attribute.String & Attribute.Required;
    frequency: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
    popular: Attribute.Boolean & Attribute.DefaultTo<false>;
    features: Attribute.Component<'elements.pricing-feature', true>;
    link: Attribute.String;
  };
}

export interface ElementsPagination extends Schema.Component {
  collectionName: 'components_elements_paginations';
  info: {
    displayName: 'pagination';
    description: '';
  };
  attributes: {
    value: Attribute.Enumeration<['infinite', 'pagination']> &
      Attribute.Required &
      Attribute.DefaultTo<'pagination'>;
  };
}

export interface ElementsOffices extends Schema.Component {
  collectionName: 'components_elements_offices';
  info: {
    displayName: 'Office';
    description: '';
  };
  attributes: {
    city: Attribute.String & Attribute.Required;
    country: Attribute.String & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
  };
}

export interface ElementsFeatures extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.RichText;
    link: Attribute.String;
    classIcon: Attribute.String;
  };
}

export interface ElementsEmailContact extends Schema.Component {
  collectionName: 'components_elements_email_contacts';
  info: {
    displayName: 'Email Contact';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface ElementsContactContent extends Schema.Component {
  collectionName: 'components_elements_content_contacts';
  info: {
    displayName: 'Contact Content';
    description: '';
  };
  attributes: {
    offices: Attribute.Component<'elements.offices', true>;
    emails: Attribute.Component<'elements.email-contact', true>;
    socials: Attribute.Component<'elements.social-network', true>;
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
    role: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.text-section': SectionTextSection;
      'section.testimonials': SectionTestimonials;
      'section.team-section': SectionTeamSection;
      'section.services-section': SectionServicesSection;
      'section.reference-section': SectionReferenceSection;
      'section.projects-section': SectionProjectsSection;
      'section.pricing-section': SectionPricingSection;
      'section.page-intro': SectionPageIntro;
      'section.hero-section': SectionHeroSection;
      'section.features-section': SectionFeaturesSection;
      'section.culture-section': SectionCultureSection;
      'section.cta': SectionCta;
      'section.contact-section': SectionContactSection;
      'section.blog-section': SectionBlogSection;
      'elements.text-zone': ElementsTextZone;
      'elements.social-network': ElementsSocialNetwork;
      'elements.section-intro': ElementsSectionIntro;
      'elements.pricing-feature': ElementsPricingFeature;
      'elements.pricing-card': ElementsPricingCard;
      'elements.pagination': ElementsPagination;
      'elements.offices': ElementsOffices;
      'elements.features': ElementsFeatures;
      'elements.email-contact': ElementsEmailContact;
      'elements.contact-content': ElementsContactContent;
      'elements.button': ElementsButton;
      'elements.author': ElementsAuthor;
    }
  }
}
