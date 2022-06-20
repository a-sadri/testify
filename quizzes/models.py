from statistics import mode
from tkinter import CASCADE
from django.db import models
from users.models import User


class Quiz(models.Model):
    title = models.CharField(max_length=250)
    examiner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class GradedQuiz(models.Model):
    examinee = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.SET_NULL, blank=True, null=True)
    grade = models.FloatField()

    def __str__(self) -> str:
        return self.examinee.username


class Choice(models.Model):
    title = models.CharField(max_length=250)

    def __str__(self):
        return self.title


class Question(models.Model):
    question = models.CharField(max_length=250)
    choices = models.ManyToManyField(Choice)
    answer = models.ForeignKey(Choice, on_delete=models.CASCADE, related_name="answer")
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    order = models.SmallIntegerField()

    def __str__(self):
        return self.question