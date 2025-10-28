import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const worlds = [
    {
      id: 1,
      title: 'Королевство теней',
      description: 'Мир магии и интриг, где древние королевства борются за власть',
      players: 1247,
      stories: 89,
      genre: 'Фэнтези',
      image: '🏰'
    },
    {
      id: 2,
      title: 'Неоновый киберпанк',
      description: 'Футуристический мегаполис, где ИИ и люди сосуществуют',
      players: 892,
      stories: 67,
      genre: 'Sci-Fi',
      image: '🌆'
    },
    {
      id: 3,
      title: 'Пустоши',
      description: 'Постапокалиптический мир выживания и поиска надежды',
      players: 654,
      stories: 45,
      genre: 'Постапокалипсис',
      image: '☢️'
    },
    {
      id: 4,
      title: 'Звёздные врата',
      description: 'Космическая одиссея по галактикам и неизведанным мирам',
      players: 1103,
      stories: 72,
      genre: 'Космоопера',
      image: '🚀'
    }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'ИИ-персонажи',
      description: 'Реалистичное взаимодействие с персонажами, управляемыми нейросетями'
    },
    {
      icon: 'BookOpen',
      title: 'Создание историй',
      description: 'Визуальный редактор для написания сюжетов и развития миров'
    },
    {
      icon: 'Users',
      title: 'Совместная работа',
      description: 'Приглашайте друзей для создания историй вместе'
    },
    {
      icon: 'Wand2',
      title: 'ИИ-мастер',
      description: 'Генерация сюжетных линий на основе ваших решений'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0A0F]/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">📖</div>
            <h1 className="text-2xl font-bold bg-gradient-fire bg-clip-text text-transparent">
              Legendarium
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Войти
            </Button>
            <Button className="bg-gradient-fire hover:opacity-90 transition-opacity">
              Начать создавать
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Icon name="MoreVertical" size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card border-primary/20">
                <DropdownMenuItem onClick={() => setActiveSection('home')} className="cursor-pointer">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveSection('worlds')} className="cursor-pointer">
                  <Icon name="Globe" size={16} className="mr-2" />
                  Миры
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveSection('characters')} className="cursor-pointer">
                  <Icon name="Users" size={16} className="mr-2" />
                  Персонажи
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/20" />
                <DropdownMenuItem onClick={() => setActiveSection('profile')} className="cursor-pointer">
                  <Icon name="User" size={16} className="mr-2" />
                  Профиль
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveSection('create')} className="cursor-pointer">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-primary/20" />
                <DropdownMenuItem onClick={() => setActiveSection('help')} className="cursor-pointer">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Помощь
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создавай легенды,<br />
              <span className="bg-gradient-fire bg-clip-text text-transparent">
                управляй судьбами
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Платформа для текстовых ролевых игр с ИИ-персонажами, где твоё воображение создаёт миры
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-fire hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать приключение
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Возможности платформы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-fire flex items-center justify-center mb-3">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Популярные миры</h3>
              <p className="text-muted-foreground text-lg">Исследуй уникальные вселенные, созданные сообществом</p>
            </div>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              Все миры
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worlds.map((world, index) => (
              <Card 
                key={world.id} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {world.image}
                  </div>
                  <Badge className="bg-primary/20 text-primary border-primary/30 w-fit mb-2">
                    {world.genre}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {world.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {world.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      <span>{world.players}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BookOpen" size={14} />
                      <span>{world.stories}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-card/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-fire rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Готов создать свою легенду?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Присоединяйся к тысячам создателей историй и начни своё приключение прямо сейчас
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Icon name="Zap" size={20} className="mr-2" />
                Создать аккаунт
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="text-3xl">📖</div>
              <div>
                <h4 className="font-bold text-lg">Legendarium</h4>
                <p className="text-sm text-muted-foreground">Платформа для создателей историй</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Сообщество</a>
              <a href="#" className="hover:text-primary transition-colors">Документация</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 Legendarium. Создавай легенды вместе с ИИ
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
