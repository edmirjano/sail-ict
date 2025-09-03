'use client';

import { useTranslations } from 'next-intl';
import { X, FileText, Shield, Cookie } from 'lucide-react';

const modalIcons = {
  terms: FileText,
  privacy: Shield,
  cookies: Cookie
};

export default function LegalModal({ isOpen, onClose, type }) {
  const t = useTranslations('Legal');

  if (!isOpen || !type) return null;

  const IconComponent = modalIcons[type];

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: t('terms_title'),
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('terms_acceptance_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('terms_acceptance_content')}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('terms_services_title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('terms_services_content')}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{t('terms_services_item1')}</li>
                  <li>{t('terms_services_item2')}</li>
                  <li>{t('terms_services_item3')}</li>
                  <li>{t('terms_services_item4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('terms_use_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('terms_use_content')}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('terms_liability_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('terms_liability_content')}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('terms_contact_title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms_contact_content')}
                  <br />
                  <strong>Email:</strong> ilirshinko@gmail.com
                  <br />
                  <strong>{t('terms_contact_phone')}:</strong> +355 67 203 3918
                </p>
              </section>
            </div>
          )
        };

      case 'privacy':
        return {
          title: t('privacy_title'),
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy_intro_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('privacy_intro_content')}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy_collect_title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('privacy_collect_content')}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{t('privacy_collect_item1')}</li>
                  <li>{t('privacy_collect_item2')}</li>
                  <li>{t('privacy_collect_item3')}</li>
                  <li>{t('privacy_collect_item4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy_use_title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('privacy_use_content')}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{t('privacy_use_item1')}</li>
                  <li>{t('privacy_use_item2')}</li>
                  <li>{t('privacy_use_item3')}</li>
                  <li>{t('privacy_use_item4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy_cookies_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('privacy_cookies_content')}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy_rights_title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-3">{t('privacy_rights_content')}</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>{t('privacy_rights_item1')}</li>
                  <li>{t('privacy_rights_item2')}</li>
                  <li>{t('privacy_rights_item3')}</li>
                  <li>{t('privacy_rights_item4')}</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('privacy_contact_title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy_contact_content')}
                  <br />
                  <strong>Email:</strong> ilirshinko@gmail.com
                </p>
              </section>
            </div>
          )
        };

      case 'cookies':
        return {
          title: t('cookies_title'),
          content: (
            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('cookies_what_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('cookies_what_content')}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('cookies_types_title')}</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('cookies_necessary_title')}</h4>
                    <p className="text-gray-700 text-sm">{t('cookies_necessary_content')}</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('cookies_analytics_title')}</h4>
                    <p className="text-gray-700 text-sm">{t('cookies_analytics_content')}</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('cookies_marketing_title')}</h4>
                    <p className="text-gray-700 text-sm">{t('cookies_marketing_content')}</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('cookies_preferences_title')}</h4>
                    <p className="text-gray-700 text-sm">{t('cookies_preferences_content')}</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('cookies_manage_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('cookies_manage_content')}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('cookies_thirdparty_title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('cookies_thirdparty_content')}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('cookies_contact_title')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('cookies_contact_content')}
                  <br />
                  <strong>Email:</strong> ilirshinko@gmail.com
                </p>
              </section>
            </div>
          )
        };

      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {content}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>{t('last_updated')}: {new Date().toLocaleDateString()}</p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              {t('close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
