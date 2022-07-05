import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BlogsController {

  async index({ view }: HttpContextContract) {

    return view.render('blog/index')
 }
}
