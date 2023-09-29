# models.py

from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    cover_image_url = models.URLField()
    # Add other fields as needed

    def __str__(self):
        return self.title
