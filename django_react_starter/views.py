from django.shortcuts import render

from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'base.html'

    def get(self, request, *args, **kwargs):
        context = {
            'some_dynamic_value': 'This text comes from django view!',
        }
        return self.render_to_response(context)