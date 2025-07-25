import { Header } from "@/components/Header";
import { QuickActions } from "@/components/QuickActions";
import { WeatherCard } from "@/components/WeatherCard";
import { CropRecommendations } from "@/components/CropRecommendations";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-farming.jpg";

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Header title={t('header.agrisathi')} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <img 
          src={heroImage} 
          alt="Modern farming in India" 
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="p-4 text-white">
            <h2 className="text-xl font-bold mb-2">{t('dashboard.welcome')}</h2>
            <p className="text-sm opacity-90">{t('dashboard.subtitle')}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <QuickActions />
        <WeatherCard />
        <CropRecommendations />
      </div>
    </div>
  );
};

export default Dashboard;