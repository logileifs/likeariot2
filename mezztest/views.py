from mezzanine.blog.models import BlogPost, BlogCategory
from django.shortcuts import get_object_or_404
from mezzanine.utils.views import paginate
from mezzanine.conf import settings
from django.contrib.auth import get_user_model
from django.template.response import TemplateResponse

User = get_user_model()


#def fashion_list(request, tag=None, year=None, month=None, username=None,
#                 category=None, template="fashion.j2",
#                 extra_context=None, sub=None):
def fashion_list(request, sub=None, template="fashion.j2"):
    """
    Display a list of blog posts that are filtered by tag, year, month,
    author or category. Custom templates are checked for using the name
    ``blog/blog_post_list_XXX.html`` where ``XXX`` is either the
    category slug or author's username if given.
    """
    category = get_object_or_404(BlogCategory, slug="fashion")
    blog_posts = BlogPost.objects.published(for_user=request.user).filter(categories=category)

    if sub is not None:
        sub = get_object_or_404(BlogCategory, slug=sub)
        blog_posts = blog_posts.filter(categories=sub)

    author = None

    prefetch = ("categories", "keywords__keyword")
    blog_posts = blog_posts.select_related("user").prefetch_related(*prefetch)
    blog_posts = paginate(blog_posts, request.GET.get("page", 1),
                          12,
                          settings.MAX_PAGING_LINKS)
    context = {"blog_posts": blog_posts, "year": None, "month": None,
               "tag": None, "category": sub, "author": author}
    #context.update(extra_context or {})
    #templates.append(template)
    return TemplateResponse(request, template, context)


def category_list(request, main=None, sub=None, template=None):
    """
    Display a list of blog posts that are filtered by tag, year, month,
    author or category. Custom templates are checked for using the name
    ``blog/blog_post_list_XXX.html`` where ``XXX`` is either the
    category slug or author's username if given.
    """
    #category = get_object_or_404(BlogCategory, slug="fashion")
    #blog_posts = BlogPost.objects.published(for_user=request.user).filter(categories=category)

    print('category_list!!!')
    if main == 'fashion':
        #print('template fashion')
        template = 'fashion.j2'

    if main == 'iceland':
        template = 'iceland.j2'

    if main == 'travel':
        template = 'travel.j2'

    if main == 'lifestyle':
        template = 'lifestyle.j2'

    print('main: %s' % main)
    category = get_object_or_404(BlogCategory, slug=main)
    print('category: %s' % category)
    blog_posts = BlogPost.objects.published(for_user=request.user).filter(categories=category)
    print('blog_posts: %s' % blog_posts)

    print('sub: %s' % sub)
    if sub is not None:
        if sub is '':
            print('sub is empty')
        print('sub is not None')
        print('sub: %s' % sub)
        sub = get_object_or_404(BlogCategory, slug=sub)
        blog_posts = blog_posts.filter(categories=sub)

    author = None

    prefetch = ("categories", "keywords__keyword")
    #print('prefetch: %s' % prefetch)
    blog_posts = blog_posts.select_related("user").prefetch_related(*prefetch)
    print('related: %s' % blog_posts)
    blog_posts = paginate(blog_posts, request.GET.get("page", 1),
                          12, settings.MAX_PAGING_LINKS)
    print('paginate: %s' % blog_posts)
    context = {"blog_posts": blog_posts, "year": None, "month": None,
               "tag": None, "category": sub, "author": author}
    print('context: %s' % context)
    #context.update(extra_context or {})
    #templates.append(template)
    #print('request: %s' % request)
    print('template: %s' % template)
    #print('context: %s' % context)
    return TemplateResponse(request, template, context)


def iceland_list(request, sub=None, template="iceland.j2"):
    """
    Display a list of blog posts that are filtered by tag, year, month,
    author or category. Custom templates are checked for using the name
    ``blog/blog_post_list_XXX.html`` where ``XXX`` is either the
    category slug or author's username if given.
    """
    print('iceland_list!!!')
    #print('category: ' + str(category))
    #sub = request.GET.get('sub')
    print('sub: ' + str(sub))
    #templates = []
    blog_posts = BlogPost.objects.published(for_user=request.user)
    if sub is not None:
        sub = get_object_or_404(BlogCategory, slug=sub)
        blog_posts = blog_posts.filter(categories=sub)
        print(str(len(blog_posts)) + ' posts')
    #    templates.append(u"fashion.j2")
    author = None
    #if username is not None:
    #    author = get_object_or_404(User, username=username)
    #    blog_posts = blog_posts.filter(user=author)
    #    #templates.append(u"blog/blog_post_list_%s.html" % username)
    #    templates.append(u"/fashion.j2")

    prefetch = ("categories", "keywords__keyword")
    blog_posts = blog_posts.select_related("user").prefetch_related(*prefetch)
    blog_posts = paginate(blog_posts, request.GET.get("page", 1),
                          12,
                          settings.MAX_PAGING_LINKS)
    context = {"blog_posts": blog_posts, "year": None, "month": None,
               "tag": None, "category": sub, "author": author}
    #context.update(extra_context or {})
    #templates.append(template)
    return TemplateResponse(request, template, context)


def travel_list(request, sub=None, template="travel.j2"):
    """
    Display a list of blog posts that are filtered by tag, year, month,
    author or category. Custom templates are checked for using the name
    ``blog/blog_post_list_XXX.html`` where ``XXX`` is either the
    category slug or author's username if given.
    """
    print('travel_list!!!')
    #print('category: ' + str(category))
    #sub = request.GET.get('sub')
    print('sub: ' + str(sub))
    #templates = []
    blog_posts = BlogPost.objects.published(for_user=request.user)
    if sub is not None:
        sub = get_object_or_404(BlogCategory, slug=sub)
        blog_posts = blog_posts.filter(categories=sub)
        print(str(len(blog_posts)) + ' posts')
    #    templates.append(u"fashion.j2")
    author = None
    #if username is not None:
    #    author = get_object_or_404(User, username=username)
    #    blog_posts = blog_posts.filter(user=author)
    #    #templates.append(u"blog/blog_post_list_%s.html" % username)
    #    templates.append(u"/fashion.j2")

    prefetch = ("categories", "keywords__keyword")
    blog_posts = blog_posts.select_related("user").prefetch_related(*prefetch)
    blog_posts = paginate(blog_posts, request.GET.get("page", 1),
                          12,
                          settings.MAX_PAGING_LINKS)
    context = {"blog_posts": blog_posts, "year": None, "month": None,
               "tag": None, "category": sub, "author": author}
    #context.update(extra_context or {})
    #templates.append(template)
    return TemplateResponse(request, template, context)


def lifestyle_list(request, sub=None, template="lifestyle.j2"):
    """
    Display a list of blog posts that are filtered by tag, year, month,
    author or category. Custom templates are checked for using the name
    ``blog/blog_post_list_XXX.html`` where ``XXX`` is either the
    category slug or author's username if given.
    """
    print('lifestyle_list!!!')
    #print('category: ' + str(category))
    #sub = request.GET.get('sub')
    print('sub: ' + str(sub))
    #templates = []
    blog_posts = BlogPost.objects.published(for_user=request.user)
    if sub is not None:
        sub = get_object_or_404(BlogCategory, slug=sub)
        blog_posts = blog_posts.filter(categories=sub)
        print(str(len(blog_posts)) + ' posts')
    #    templates.append(u"fashion.j2")
    author = None
    #if username is not None:
    #    author = get_object_or_404(User, username=username)
    #    blog_posts = blog_posts.filter(user=author)
    #    #templates.append(u"blog/blog_post_list_%s.html" % username)
    #    templates.append(u"/fashion.j2")

    prefetch = ("categories", "keywords__keyword")
    blog_posts = blog_posts.select_related("user").prefetch_related(*prefetch)
    blog_posts = paginate(blog_posts, request.GET.get("page", 1),
                          12,
                          settings.MAX_PAGING_LINKS)
    context = {"blog_posts": blog_posts, "year": None, "month": None,
               "tag": None, "category": sub, "author": author}
    #context.update(extra_context or {})
    #templates.append(template)
    return TemplateResponse(request, template, context)
