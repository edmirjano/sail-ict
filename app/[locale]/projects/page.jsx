'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  Camera,
  AlertTriangle,
  Map as MapIcon,
  Target,
  Clock,
  ArrowLeft,
  MapPin as LocationIcon
} from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CookieConsent from '../../../components/CookieConsent';
import LegalModal from '../../../components/LegalModal';
import useLegalModal from '../../../hooks/useLegalModal';
import useLocalePath from '../../../hooks/useLocalePath';

export default function ProjectsPage() {
  const t = useTranslations();
  const { home } = useLocalePath();
  const { isOpen, modalType, closeModal, openTerms, openPrivacy, openCookies } = useLegalModal();

  const features = [
    { icon: Camera, title: t('Projects.feature1_title'), desc: t('Projects.feature1_desc') },
    { icon: AlertTriangle, title: t('Projects.feature2_title'), desc: t('Projects.feature2_desc') },
    { icon: MapIcon, title: t('Projects.feature3_title'), desc: t('Projects.feature3_desc') }
  ];

  const phases = [
    { title: t('Projects.phase1_title'), desc: t('Projects.phase1_desc') },
    { title: t('Projects.phase2_title'), desc: t('Projects.phase2_desc') },
    { title: t('Projects.phase3_title'), desc: t('Projects.phase3_desc') }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header minimal />

      {/* Projects Section */}
      <section id="projects" className="pt-32 pb-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <a
              href={home}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              {t('Projects.back_home')}
            </a>

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              {t('Projects.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
              {t('Projects.subtitle')}
            </p>

            {/* Dragonfly-Agri */}
            <article className="bg-white p-6 md:p-10 rounded-xl shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t('Projects.dragonfly_title')}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-600 mt-2">
                  <span className="flex items-center text-sm">
                    <LocationIcon className="w-4 h-4 mr-1" />
                    {t('Projects.dragonfly_location')}
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {t('Projects.dragonfly_duration')}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-gray-600 leading-relaxed">
                  {t('Projects.dragonfly_intro1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('Projects.dragonfly_intro2')}
                </p>
              </div>

              {/* How it works */}
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                {t('Projects.features_title')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-gray-50 p-6 rounded-xl">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">{title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Project phases */}
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                {t('Projects.phases_title')}
              </h4>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {phases.map(({ title, desc }, index) => (
                  <li key={title} className="relative">
                    <div className="flex items-center mb-4">
                      <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                        {index + 1}
                      </span>
                      {index < phases.length - 1 && (
                        <span className="hidden md:block flex-1 h-0.5 bg-blue-200 ml-4" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                      {t('Projects.phase_label')} {index + 1}
                    </p>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">{title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </li>
                ))}
              </ol>

              {/* Goal */}
              <div className="flex items-start bg-green-50 p-6 rounded-xl mb-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('Projects.goal_title')}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {t('Projects.goal_text')}
                  </p>
                </div>
              </div>

              {/* Supported by */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
                  {t('Projects.supported_by')}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4">
                  <a
                    href="https://startupalbania.gov.al/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <Image
                      src="/startup-albania.png"
                      alt={t('Projects.startup_albania')}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">
                      {t('Projects.startup_albania')}
                    </span>
                  </a>
                  <a
                    href="https://ekonomia.gov.al/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <Image
                      src="/ministria.png"
                      alt={t('Projects.ministry')}
                      width={785}
                      height={805}
                      className="h-12 w-auto rounded-sm"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors">
                      {t('Projects.ministry')}
                    </span>
                  </a>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t('Projects.support_text')}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenTerms={openTerms}
        onOpenPrivacy={openPrivacy}
        onOpenCookies={openCookies}
      />

      {/* Cookie Consent Popup */}
      <CookieConsent onOpenCookiePolicy={openCookies} />

      {/* Legal Modals */}
      <LegalModal
        isOpen={isOpen}
        onClose={closeModal}
        type={modalType}
      />
    </div>
  );
}
