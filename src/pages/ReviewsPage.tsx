
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { testimonials } from '@/constants/destinations';
import { StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ReviewForm from '@/components/reviews/ReviewForm';

const ReviewsPage = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Traveler Reviews
            </h1>
            <p className="text-gray-600">
              See what our community has to say about their experiences with Wanderlust Adventures and discover why we're trusted by travelers around the world.
            </p>
          </div>
          
          {/* Add Review Button */}
          <div className="flex justify-center mb-12">
            <Button 
              className="bg-india-saffron hover:bg-india-saffron/90 text-white"
              onClick={() => setShowReviewForm(true)}
            >
              Share Your Experience
            </Button>
          </div>
          
          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-16">
              <ReviewForm onClose={() => setShowReviewForm(false)} />
            </div>
          )}
          
          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        size={16} 
                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Review Guidelines */}
          <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-india-blue mb-4">Review Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Share your authentic experiences with our travel recommendations</li>
              <li>Mention specific destinations or experiences you enjoyed</li>
              <li>Include both positive aspects and areas where we could improve</li>
              <li>Keep your reviews respectful and constructive</li>
              <li>We verify all reviews to ensure they're from actual travelers</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              We appreciate your feedback as it helps us improve our recommendations and helps other travelers make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
