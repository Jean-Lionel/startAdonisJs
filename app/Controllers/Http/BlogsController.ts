import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from '../../Models/Post'

export default class BlogsController {

  async index({ view }: HttpContextContract) {

    const posts = await Post.all();

    return view.render('blog/index', {
      posts : posts,
    })
  }

  async show({ params, view }: HttpContextContract) {

    const post = await Post.findOrFail(params.id)

    return view.render('blog/view', {
      post: post,
    })

 }
}
