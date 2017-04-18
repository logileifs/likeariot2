from mezzanine.blog.models import BlogPost
#from mezzanine.core.models import MetaData
from mezzanine.generic.models import Keyword
from django.db.models import Q
from django import template

register = template.Library()


@register.assignment_tag
def get_featured(keyword):
	print('get_featured!!!')
	print('keyword: %s' % keyword)
	title_or_slug = lambda s: Q(title=s) | Q(slug=s)
	try:
		tag = Keyword.objects.get(title_or_slug(keyword))
	except:
		return None
	print('tag: %s' % tag)
	blog_post = BlogPost.objects.published().filter(keywords__keyword=tag).order_by('-publish_date').first()
	print('blog_post: %s' % blog_post)
	return blog_post
