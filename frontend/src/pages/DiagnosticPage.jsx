import { useState } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'

const initialData = {
  sector: '',
  revenue: '',
  teamSize: '',
  location: 'Montpellier',
  objectives: '',
  blockers: '',
  timeline: '',
  financing: '',
  decisionTime: '',
  notes: '',
  name: '',
  role: '',
  email: '',
  phone: '',
  consent: false,
}

const steps = [
  {
    title: 'Votre entreprise',
    description: 'Aidez-nous à comprendre votre contexte commercial.',
    fields: ['sector', 'revenue', 'teamSize', 'location'],
  },
  {
    title: 'Objectifs & freins',
    description: 'Quels KPIs souhaitez-vous booster sur 90 jours ?',
    fields: ['objectives', 'blockers', 'timeline'],
  },
  {
    title: 'Financement & décision',
    description: 'Préparons les démarches et les parties prenantes.',
    fields: ['financing', 'decisionTime', 'notes'],
  },
  {
    title: 'Coordonnées',
    description: 'Vos informations pour vous recontacter.',
    fields: ['name', 'role', 'email', 'phone', 'consent'],
  },
]

const fieldLabels = {
  sector: "Secteur d'activité",
  revenue: "Chiffre d'affaires",
  teamSize: "Taille de l'équipe commerciale",
  location: 'Lieu souhaité',
  objectives: 'Objectifs sur 90 jours',
  blockers: 'Freins identifiés',
  timeline: 'Horizon de mise en place',
  financing: 'Financement / OPCO',
  decisionTime: 'Délai de décision',
  notes: 'Notes complémentaires',
  name: 'Nom et prénom',
  role: 'Fonction',
  email: 'Email',
  phone: 'Téléphone',
  consent: 'Consentement RGPD',
}

export default function DiagnosticPage() {
  usePageTitle('Diagnostic gratuit')
  const [stepIndex, setStepIndex] = useState(0)
  const [formData, setFormData] = useState(initialData)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const totalSteps = steps.length
  const currentStep = steps[stepIndex]

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateStep = () => {
    const newErrors = {}
    currentStep.fields.forEach((field) => {
      if (field === 'notes') return
      if (field === 'consent') {
        if (!formData.consent) {
          newErrors.consent = 'Merci de valider le consentement.'
        }
        return
      }
      if (!formData[field]) {
        newErrors[field] = 'Champ requis'
      }
      if (field === 'email' && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Format email invalide'
      }
      if (field === 'phone' && formData.phone && formData.phone.replace(/\D/g, '').length < 8) {
        newErrors.phone = 'Numéro trop court'
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const goNext = () => {
    if (!validateStep()) return
    setStepIndex((prev) => Math.min(prev + 1, totalSteps - 1))
  }

  const goBack = () => {
    setErrors({})
    setStepIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateStep()) return
    setSubmitted(true)
    console.table(formData)
  }

  if (submitted) {
    return (
      <div className="page diagnostic-page">
        <section className="page-header">
          <div className="container">
            <h1>Merci !</h1>
            <p>
              Votre diagnostic est bien enregistré. Nous revenons vers vous sous 24h pour planifier le rendez-vous (Montpellier,
              Paris ou visio).
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container summary-card">
            <h2>Récapitulatif</h2>
            <dl>
              {Object.entries(formData).map(([field, value]) => (
                <div key={field}>
                  <dt>{fieldLabels[field] ?? field}</dt>
                  <dd>{typeof value === 'boolean' ? (value ? 'Oui' : 'Non') : value || '—'}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page diagnostic-page">
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Diagnostic</p>
          <h1>Préparez votre sprint commercial</h1>
          <p>
            4 étapes pour qualifier votre contexte, vos objectifs et organiser la prise de rendez-vous.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <form className="multi-step-form" onSubmit={handleSubmit} noValidate>
            <div className="form-progress" aria-hidden="true">
              <div className="form-progress-bar" style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }} />
            </div>
            <header className="form-header">
              <h2>
                Étape {stepIndex + 1} / {totalSteps} — {currentStep.title}
              </h2>
              <p>{currentStep.description}</p>
            </header>

            {currentStep.fields.includes('sector') && (
              <div className="form-group">
                <label htmlFor="sector">Secteur d&apos;activité</label>
                <input
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={(e) => handleChange('sector', e.target.value)}
                  required
                />
                {errors.sector && <p className="error">{errors.sector}</p>}
              </div>
            )}

            {currentStep.fields.includes('revenue') && (
              <div className="form-group">
                <label htmlFor="revenue">Chiffre d&apos;affaires (M€)</label>
                <input
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={(e) => handleChange('revenue', e.target.value)}
                  placeholder="ex : 8"
                  required
                />
                {errors.revenue && <p className="error">{errors.revenue}</p>}
              </div>
            )}

            {currentStep.fields.includes('teamSize') && (
              <div className="form-group">
                <label htmlFor="teamSize">Taille de l&apos;équipe commerciale</label>
                <input
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={(e) => handleChange('teamSize', e.target.value)}
                  placeholder="ex : 6 commerciaux"
                  required
                />
                {errors.teamSize && <p className="error">{errors.teamSize}</p>}
              </div>
            )}

            {currentStep.fields.includes('location') && (
              <div className="form-group">
                <label htmlFor="location">Lieu souhaité</label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                >
                  <option value="Montpellier">Montpellier</option>
                  <option value="Paris">Paris</option>
                  <option value="Hybride">Hybride</option>
                  <option value="100% distanciel">100% distanciel</option>
                </select>
              </div>
            )}

            {currentStep.fields.includes('objectives') && (
              <div className="form-group">
                <label htmlFor="objectives">Objectifs 90 jours</label>
                <textarea
                  id="objectives"
                  name="objectives"
                  value={formData.objectives}
                  onChange={(e) => handleChange('objectives', e.target.value)}
                  rows={4}
                  required
                />
                {errors.objectives && <p className="error">{errors.objectives}</p>}
              </div>
            )}

            {currentStep.fields.includes('blockers') && (
              <div className="form-group">
                <label htmlFor="blockers">Freins principaux</label>
                <textarea
                  id="blockers"
                  name="blockers"
                  value={formData.blockers}
                  onChange={(e) => handleChange('blockers', e.target.value)}
                  rows={3}
                  required
                />
                {errors.blockers && <p className="error">{errors.blockers}</p>}
              </div>
            )}

            {currentStep.fields.includes('timeline') && (
              <div className="form-group">
                <label htmlFor="timeline">Délai de lancement souhaité</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="moins de 1 mois">Moins de 1 mois</option>
                  <option value="1 à 3 mois">1 à 3 mois</option>
                  <option value="3 à 6 mois">3 à 6 mois</option>
                </select>
                {errors.timeline && <p className="error">{errors.timeline}</p>}
              </div>
            )}

            {currentStep.fields.includes('financing') && (
              <div className="form-group">
                <label htmlFor="financing">Financement envisagé</label>
                <select
                  id="financing"
                  name="financing"
                  value={formData.financing}
                  onChange={(e) => handleChange('financing', e.target.value)}
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="OPCO">OPCO</option>
                  <option value="CPF">CPF</option>
                  <option value="Autofinancement">Autofinancement</option>
                  <option value="À étudier">À étudier</option>
                </select>
                {errors.financing && <p className="error">{errors.financing}</p>}
              </div>
            )}

            {currentStep.fields.includes('decisionTime') && (
              <div className="form-group">
                <label htmlFor="decisionTime">Délai de décision</label>
                <select
                  id="decisionTime"
                  name="decisionTime"
                  value={formData.decisionTime}
                  onChange={(e) => handleChange('decisionTime', e.target.value)}
                  required
                >
                  <option value="">Sélectionner</option>
                  <option value="Cette semaine">Cette semaine</option>
                  <option value="Sous 2 semaines">Sous 2 semaines</option>
                  <option value="Sous 1 mois">Sous 1 mois</option>
                  <option value="Plus tard">Plus tard</option>
                </select>
                {errors.decisionTime && <p className="error">{errors.decisionTime}</p>}
              </div>
            )}

            {currentStep.fields.includes('notes') && (
              <div className="form-group">
                <label htmlFor="notes">Commentaires complémentaires</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  rows={3}
                  placeholder="Précisez vos attentes, contraintes logistiques, etc."
                />
              </div>
            )}

            {currentStep.fields.includes('name') && (
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
            )}

            {currentStep.fields.includes('role') && (
              <div className="form-group">
                <label htmlFor="role">Fonction</label>
                <input
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  placeholder="Dirigeant, directeur commercial, DRH..."
                  required
                />
                {errors.role && <p className="error">{errors.role}</p>}
              </div>
            )}

            {currentStep.fields.includes('email') && (
              <div className="form-group">
                <label htmlFor="email">Email professionnel</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            )}

            {currentStep.fields.includes('phone') && (
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="ex : +33 6 12 34 56 78"
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
            )}

            {currentStep.fields.includes('consent') && (
              <div className="form-group checkbox">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleChange('consent', e.target.checked)}
                  required
                />
                <label htmlFor="consent">
                  J&apos;accepte d&apos;être contacté et j&apos;ai lu la{' '}
                  <a href="/confidentialite">politique de confidentialité</a>.
                </label>
                {errors.consent && <p className="error">{errors.consent}</p>}
              </div>
            )}

            <footer className="form-footer">
              <div className="form-navigation">
                {stepIndex > 0 && (
                  <button type="button" className="button ghost" onClick={goBack}>
                    Retour
                  </button>
                )}
                {stepIndex < totalSteps - 1 ? (
                  <button type="button" className="button secondary" onClick={goNext}>
                    Étape suivante
                  </button>
                ) : (
                  <button type="submit" className="button primary">
                    Envoyer le diagnostic
                  </button>
                )}
              </div>
              <p className="form-hint">Temps estimé : 3 minutes</p>
            </footer>
          </form>
        </div>
      </section>
    </div>
  )
}
