
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, BookOpen, Eye, Edit } from 'lucide-react';

const mockKBArticles = [
  {
    id: 'KB-001',
    title: 'How to troubleshoot database connection issues',
    category: 'Database',
    tags: ['MySQL', 'Connection', 'Timeout'],
    lastUpdated: '2024-07-02',
    views: 245,
    author: 'John Doe'
  },
  {
    id: 'KB-002',
    title: 'API Authentication Best Practices',
    category: 'API',
    tags: ['Authentication', 'Security', 'OAuth'],
    lastUpdated: '2024-07-01',
    views: 189,
    author: 'Jane Smith'
  },
  {
    id: 'KB-003',
    title: 'Mobile App Performance Optimization',
    category: 'Mobile',
    tags: ['iOS', 'Android', 'Performance'],
    lastUpdated: '2024-06-28',
    views: 167,
    author: 'Mike Johnson'
  },
  {
    id: 'KB-004',
    title: 'Server Monitoring and Alerting Setup',
    category: 'Infrastructure',
    tags: ['Monitoring', 'Alerts', 'DevOps'],
    lastUpdated: '2024-06-30',
    views: 203,
    author: 'Alice Brown'
  }
];

export const KnowledgeBasePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = mockKBArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Knowledge Base - Technical Dashboard</title>
      </Helmet>
      
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-violet-crayola">Knowledge Base</h1>
            <p className="text-muted-foreground">Technical documentation and troubleshooting guides</p>
          </div>
          <Button className="bg-capri hover:bg-capri/90 text-white">
            <Plus className="mr-2 h-4 w-4" />
            Create Article
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search knowledge base..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <BookOpen className="h-5 w-5 text-electric-blue mt-1 flex-shrink-0" />
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-mauve/20 text-violet-crayola border-mauve">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {article.views} views
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>Updated: {article.lastUpdated}</div>
                        <div>By: {article.author}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
